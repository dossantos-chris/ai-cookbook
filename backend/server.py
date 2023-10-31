from flask import Flask, request, jsonify
from bardapi import Bard
import os

app = Flask(__name__)
bard = Bard(token="xxxxxx")
#res = bard.get_answer("Write me a basic recipe for chocolate chip chookies")['content']

@app.route("/api", methods=["POST"])
def api():
    data = request.data   # Extract the JSON data from the request
    if data is not None:
        res = bard.get_answer(f"Write me a basic recipe for {data}")['content']
        return jsonify({'text': f'{res}'})
    else:
        return jsonify({'error': 'No JSON data found in the request.'}), 400

if __name__ == "__main__":
    app.run(debug=True)