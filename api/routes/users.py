from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint
from sqlalchemy.exc import IntegrityError

from api.models.users import User
from api.schemas.users import UserSchema
from api.services.user_service import create_user

user_bp = Blueprint("user", __name__, url_prefix="/api/users")


@user_bp.route("/list")
class UserList(MethodView):
    @user_bp.response(200, UserSchema(many=True))
    def get(self):
        from api.database import db
        users = db.session.query(User).all()

        return users, 200


@user_bp.route("/create", methods=["POST"])
class UserCreate(MethodView):
    @user_bp.response(201)
    def post(self):
        try:
            create_user(request.get_json())
            return {"message": "User created successfully"}, 201
        except IntegrityError as e:
            error_message = str(e.orig).split("\n")[1].strip()
            return {"message": error_message}, 409
