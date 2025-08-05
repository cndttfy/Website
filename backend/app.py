from flask import Flask
from flask_cors import CORS
from services import services_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(services_bp)

if __name__ == "__main__":
    app.run(debug=True)
