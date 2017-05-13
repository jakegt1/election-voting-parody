from flask import Flask, render_template
from flask_parody.constituencies import consts_list
from operator import itemgetter
app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    const_names = [ const.get("name").upper() for const in consts_list ]
    const_names = sorted(const_names)
    return render_template('index.html', consts=const_names)


