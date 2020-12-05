from flask import Flask
from werkzeug.exceptions import NotFound
from werkzeug.middleware.dispatcher import DispatcherMiddleware

from ctfdApp import app as ctf

app = Flask(__name__)


app.wsgi_app = DispatcherMiddleware(NotFound(), {
    "/ctf": ctf
})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=False)
