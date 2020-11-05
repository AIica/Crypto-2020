from flask_restplus import Namespace, Resource

from CTFd.models import Solves, Awards, Teams
from CTFd.utils.scores import get_response, get_standings
from CTFd.utils import get_config
from CTFd.utils.modes import TEAMS_MODE
from CTFd.utils.dates import unix_time_to_utc, unix_time, isoformat
from CTFd.utils.decorators.visibility import check_account_visibility, check_score_visibility

scoreboard_namespace = Namespace('scoreboard', description="Endpoint to retrieve scores")


@scoreboard_namespace.route('')
class ScoreboardList(Resource):
    @check_account_visibility
    @check_score_visibility
    def get(self):
        math_response = get_response(TEAMS_MODE, is_math=True)
        response = get_response(TEAMS_MODE, is_math=False)
        return {
            'success': True,
            'data': {
                'math': math_response,
                'ctf': response
            }
        }


@scoreboard_namespace.route('/top/<count>')
@scoreboard_namespace.param('count', 'How many top teams to return')
class ScoreboardDetail(Resource):
    @check_account_visibility
    @check_score_visibility
    def get(self, count):
        response = {}

        standings = get_standings(count=count)

        team_ids = [team.account_id for team in standings]

        solves = Solves.query.filter(Solves.account_id.in_(team_ids))
        awards = Awards.query.filter(Awards.account_id.in_(team_ids))

        freeze = get_config('freeze')

        if freeze:
            solves = solves.filter(Solves.date < unix_time_to_utc(freeze))
            awards = awards.filter(Awards.date < unix_time_to_utc(freeze))

        solves = solves.all()
        awards = awards.all()

        for i, team in enumerate(team_ids):
            response[i + 1] = {
                'id': standings[i].account_id,
                'name': standings[i].name,
                'solves': []
            }
            for solve in solves:
                if solve.account_id == team:
                    response[i + 1]['solves'].append({
                        'challenge_id': solve.challenge_id,
                        'account_id': solve.account_id,
                        'team_id': solve.team_id,
                        'user_id': solve.user_id,
                        'value': solve.challenge.value,
                        'date': isoformat(solve.date)
                    })
            for award in awards:
                if award.account_id == team:
                    response[i + 1]['solves'].append({
                        'challenge_id': None,
                        'account_id': award.account_id,
                        'team_id': award.team_id,
                        'user_id': award.user_id,
                        'value': award.value,
                        'date': isoformat(award.date)
                    })
            response[i + 1]['solves'] = sorted(response[i + 1]['solves'], key=lambda k: k['date'])

        return {
            'success': True,
            'data': response
        }
