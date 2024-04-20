from app import app
from flask import request, jsonify, render_template
from app.chatbot import bot

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json  # Expecting JSON data
    user_message = data['message']
    print("Received message from user:", user_message)  # Log the message to console
    print(str(bot.get_response(user_message)))
    return str(bot.get_response(user_message))


