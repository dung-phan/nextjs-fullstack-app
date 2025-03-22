from flask import Blueprint, jsonify, request

login_bp = Blueprint("login", __name__, url_prefix="/api/login")


@login_bp.route("/", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    remember_me = data.get("remember_me")

    if not username or not password:
        return jsonify({"error": "Invalid username or password"}), 400

    return jsonify({"message": "Successfully logged in"}), 200
