from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from models import User

login_bp = Blueprint('login', __name__)

@login_bp.route('/login', methods=['POST'])
def login_user_route():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        login_user(user)
        return jsonify({"message": "Login successful", "user": user.username})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@login_bp.route('/logout', methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out"})

@login_bp.route('/protected', methods=['GET'])
@login_required
def protected():
    return jsonify({"message": f"Hello, {current_user.username}!"})
