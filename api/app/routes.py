from app import app
from flask import request, jsonify, render_template

@app.route('/')
def home():
    return "Welcome to the Flask API!"

@app.route('/profile/<name>')
def profile(name):
    return render_template("index.html", name=name)

@app.route('/receive_message', methods=['POST'])
def receive_message():
    data = request.json  # Expecting JSON data
    user_message = data['message']
    print("Received message from user:", user_message)  # Log the message to console
    return jsonify({"status": "Message received", "your_message": user_message})


