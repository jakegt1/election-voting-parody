from flask import Flask, render_template
from flask_parody.constituencies import consts_list
from operator import itemgetter
app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
    const_names = [ const.get("name").upper() for const in consts_list ]
    const_names = sorted(const_names)
    return render_template('index.html', consts=const_names)

@app.route("/about", methods=['GET'])
def about():
    return render_template('about.html')


