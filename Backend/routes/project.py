from flask import Flask,Blueprint,jsonify

projects_bp=Blueprint("projects",__name__)

@projects_bp.route("/projects",methods=["GET"])
def projects():
    return jsonify({"message":"Welcome to ScaleMate Projects"})