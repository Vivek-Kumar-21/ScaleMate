from flask import Blueprint, jsonify, request
import json
import os

project_bp = Blueprint('project', __name__)

DATA_FILE = 'data.json'

# Load or initialize data
def load_data():
    if not os.path.exists(DATA_FILE):
        return {"projects": [], "teams": []}
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2)

@project_bp.route('/projects', methods=['GET'])
def get_projects():
    data = load_data()
    return jsonify({"projects": data.get("projects", [])})

@project_bp.route('/projects', methods=['POST'])
def add_project():
    new_project = request.json
    data = load_data()
    data["projects"].append(new_project)
    save_data(data)
    return jsonify({"success": True})

@project_bp.route('/teams', methods=['GET'])
def get_teams():
    data = load_data()
    return jsonify({"teams": data.get("teams", [])})

@project_bp.route('/teams', methods=['POST'])
def add_team():
    new_team = request.json
    data = load_data()
    data["teams"].append(new_team)
    save_data(data)
    return jsonify({"success": True})
