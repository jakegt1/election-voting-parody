from flask import Flask, render_template
from flask_parody.constituencies import consts_list
app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template('index.html', consts=consts_list)


