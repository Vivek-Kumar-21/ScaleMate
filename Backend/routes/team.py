from flask import Flask,Blueprint,jsonify

teams_bp=Blueprint("teams",__name__)

@teams_bp.route("/teams",methods=["GET"])
def teams():
    return jsonify({"message":"Welcome to ScaleMate Teams"})