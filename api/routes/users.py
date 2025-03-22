from flask import Blueprint, request

from api.models.users import User
from api.schemas.users import UserSchema
from api.services.user_service import create_user

user_bp = Blueprint("user", __name__, url_prefix="/api/users")
users_schema = UserSchema(many=True)


@user_bp.route("/list", methods=["GET"])
def list_users():
    from api.database import db
    users = db.session.query(User).all()
    json_response = users_schema.dump(users)

    return {"users": json_response}, 200


@user_bp.route("/create", methods=["POST"])
def create():
    data = request.form

    create_user(data)

    return {"message": "User created successfully"}, 201
