from flask import Flask

app = Flask(__name__, template_folder='backend/core/templates',
            static_url_path='/static',
            static_folder='frontend/src')
