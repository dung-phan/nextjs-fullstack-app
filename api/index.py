import logging

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_smorest import Api

from api.database import db
from api.routes.login import login_bp
from config import Config
from routes.books import books_bp
from routes.users import user_bp

load_dotenv()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)
    api = Api(app)

    api.register_blueprint(books_bp)
    api.register_blueprint(user_bp)
    api.register_blueprint(login_bp)

    return app


app = create_app()
app.logger.setLevel(logging.DEBUG)

if __name__ == "__main__":
    app.run(debug=True)
