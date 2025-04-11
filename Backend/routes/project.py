from flask import Flask, Blueprint, jsonify

projects_bp = Blueprint("projects", __name__)

@projects_bp.route("/projects", methods=["GET"])
def projects():
    # Added mock projects data for demonstration
    projects_data = [
        {
            "id": 1,
            "name": "Mobile App Redesign",
            "description": "Revamping the user interface for better engagement",
            "deadline": "March 30, 2024",
            "taskCount": 24,
            "progress": 65
        },
        {
            "id": 2,
            "name": "API Integration",
            "description": "Implementing new payment gateway APIs",
            "deadline": "April 15, 2024",
            "taskCount": 18,
            "progress": 30
        },
        {
            "id": 3,
            "name": "Analytics Dashboard",
            "description": "Building real-time analytics dashboard",
            "deadline": "April 30, 2024",
            "taskCount": 32,
            "progress": 15
        }
    ]
    return jsonify({"message": "Welcome to ScaleMate Projects", "projects": projects_data})