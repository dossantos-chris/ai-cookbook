from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from bardapi import Bard
import os
from dotenv import load_dotenv, dotenv_values
load_dotenv()

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)
bard = Bard(token=os.getenv("API_KEY"))

#curl -X POST -H "Content-Type: text/plain" -d "chocolate cake" http://localhost:5000/api
@app.route("/api", methods=["POST"])
@cross_origin()
def api():
    if request.data and request.headers['Content-Type'] == 'text/plain':
        res = bard.get_answer(f"Write me a basic recipe for {request.data.decode('utf-8')}")['content']
        return jsonify({'text': f'{res}'})
    else:
        return jsonify({'error': 'No text data fsound in the request.'}), 400

if __name__ == "__main__":
    app.run(debug=True)