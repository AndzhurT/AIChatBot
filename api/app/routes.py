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
    bot_response = bot.get_response(user_message)


    print("Received message from user:", user_message)  # Log the message to console
    print(str(bot_response))
    print(bot_response.confidence)
    if bot_response.confidence:
            bot_response = str(bot_response)      
            print(bot_response)
            return str(bot.get_response(user_message))
    return "I don't know what you are asking"


