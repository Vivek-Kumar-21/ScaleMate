from flask import Flask, Blueprint, jsonify

teams_bp = Blueprint("teams", __name__)

@teams_bp.route("/teams", methods=["GET"])
def teams():
    # Added mock teams data for demonstration
    teams_data = [
        {
            "id": 1,
            "name": "Frontend Team",
            "size": 8,
            "focus": "User Interface Development",
            "skills": ["React", "JavaScript", "Tailwind"]
        },
        {
            "id": 2,
            "name": "Backend Team",
            "size": 6,
            "focus": "API Development",
            "skills": ["Python", "Flask", "PostgreSQL"]
        },
        {
            "id": 3,
            "name": "Design Team",
            "size": 4,
            "focus": "User Experience",
            "skills": ["Figma", "UI/UX", "Prototyping"]
        }
    ]
    return jsonify({"message": "Welcome to ScaleMate Teams", "teams": teams_data})