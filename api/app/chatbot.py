from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer
import os

# Data filepath
data_filepath = '/Users/elzaterminkeeva/phillyCode2024/api/app/data'

# Creating ChatBot Instance
bot = ChatBot('ChatBot')
trainer = ListTrainer(bot)

# Bot training from data files
try:
    for file in os.listdir(data_filepath):
        file_path = os.path.join(data_filepath, file)
        with open(file_path, 'r') as chat_file:
            chats = chat_file.readlines()
            trainer.train(chats)
except Exception as e:
    print(f"An error occurred: {e}")

# Training with English Corpus Data
trainer_corpus = ChatterBotCorpusTrainer(bot)
trainer_corpus.train('chatterbot.corpus.english')