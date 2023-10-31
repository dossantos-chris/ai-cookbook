from flask import Flask, request, jsonify
from bardapi import Bard
import os
from dotenv import load_dotenv, dotenv_values
load_dotenv()

app = Flask(__name__)
bard = Bard(token=os.getenv("API_KEY"))

#curl -X POST -H "Content-Type: text/plain" -d "chocolate cake" http://localhost:5000/api
@app.route("/api", methods=["POST"])
def api():
    if request.data:
        res = bard.get_answer(f"Write me a basic recipe for {request.data}")['content']
        return jsonify({'text': f'{res}'})
    else:
        return jsonify({'error': 'No text data found in the request.'}), 400

if __name__ == "__main__":
    app.run(debug=True)