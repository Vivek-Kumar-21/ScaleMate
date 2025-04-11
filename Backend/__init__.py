from flask import Flask
from flask_cors import CORS
from db import db , bcrypt
from models import User

#import blueprints

from routes.home import home_bp
from routes.login import login_bp
from routes.project import projects_bp
from routes.team import teams_bp

#end blueprints

def create_app():
    app=Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY']='2b6d18b405a854a5e574c786'

    db.init_app(app)
    bcrypt.init_app(app)

    #register blueprints

    app.register_blueprint(home_bp)
    app.register_blueprint(login_bp)
    app.register_blueprint(projects_bp)
    app.register_blueprint(teams_bp)

    with app.app_context():
        db.create_all()

        if not User.query.filter_by(username="admin").first():
            test_user = User(username="admin", email="admin@example.com")
            test_user.set_password("admin123")
            db.session.add(test_user)
            db.session.commit()
    return app