from flask_heroku import Heroku
from backend.core.views import app


heroku = Heroku(app)


if __name__ == '__main__':
    app.run()
