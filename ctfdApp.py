from CTFd import create_app, socketio

app = create_app()
# app.run(debug=True, threaded=True, host="127.0.0.1", port=4000)
if __name__ == '__main__':
    socketio.run(app, debug=False, host="127.0.0.1", port=8000)
