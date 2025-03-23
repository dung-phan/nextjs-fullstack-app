from flask.views import MethodView
from flask_smorest import Blueprint

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


@user_bp.route("/create")
class UserCreate(MethodView):
    @user_bp.arguments(UserSchema)
    @user_bp.response(201)
    def post(self, user_data):
        create_user(user_data)

        return {"message": "User created successfully"}, 201
