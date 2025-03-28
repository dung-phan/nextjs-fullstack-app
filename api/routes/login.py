from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint

login_bp = Blueprint("login", __name__, url_prefix="/api/auth")


@login_bp.route("/login", methods=["POST"])
class Login(MethodView):
    @login_bp.response(201)
    def post(self):
        from api.services.user_service import validate_user

        username = request.json.get("username")
        password = request.json.get("password")

        if validate_user(username, password):
            return {"message": "Login successful"}, 200
        else:
            return {"message": "Invalid credentials"}, 401

#
