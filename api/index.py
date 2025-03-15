import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from api.routes.books import books_bp

load_dotenv()
db = SQLAlchemy()
migrate = Migrate()
print("Database URL:", os.getenv('DATABASE_URL'))


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(books_bp)
    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
