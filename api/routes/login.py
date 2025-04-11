from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint

login_bp = Blueprint("login", __name__, url_prefix="/api/auth")


@login_bp.route("/login", methods=["POST"])
class Login(MethodView):
    @login_bp.response(200)
    def post(self):
        from api.services.user_service import validate_user

        username = request.json.get("username")
        password = request.json.get("password")

        user = validate_user(username, password)

        if user:
            return {"message": "Login successful", "user": user}, 200
        else:
            return {"message": "Invalid credentials"}, 401

#
