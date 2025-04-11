from flask import Flask
from flask_cors import CORS
from db import db , bcrypt
from models import User
from flask_login import LoginManager

#import blueprints

from routes.home import home_bp
from routes.login import login_bp
from routes.project import projects_bp
from routes.team import teams_bp
from routes.projects import project_bp

# end blueprints
login_manager=LoginManager()
def load_user(user_id):
    return User.query.get(int(user_id))

def create_app():
    app=Flask(__name__)
    CORS(app, supports_credentials=True)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY']='2b6d18b405a854a5e574c436'

    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'login.login_user_route'
    login_manager.user_loader(load_user)

    #register blueprints

    app.register_blueprint(home_bp)
    app.register_blueprint(login_bp)
    app.register_blueprint(projects_bp)
    app.register_blueprint(teams_bp)
    app.register_blueprint(project_bp)

    with app.app_context():
        db.create_all()

        if not User.query.filter_by(username="admin").first():
            test_user = User(username="admin", email="admin@example.com")
            test_user.set_password("admin234")
            db.session.add(test_user)
            db.session.commit()
    return app