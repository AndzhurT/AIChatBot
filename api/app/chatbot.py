from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer
import os


# Data filepath 
dirname = os.path.dirname(__file__)
data_filepath = os.path.join(dirname, 'data')

# Creating ChatBot Instance
bot = ChatBot('ChatBot', 
              logic_adapters=[
        {
            'import_path': 'chatterbot.logic.BestMatch',
            'default_response': 'I am sorry, but I do not understand.',
            'minimum_similarity_threshold': 0.4
        }
    ])
trainer = ListTrainer(bot)

# Bot training from data files
try:
    for file in os.listdir(data_filepath):
        file_path = os.path.join(data_filepath, file)
        print(file_path)
        with open(file_path, 'r') as chat_file:
            chats = chat_file.readlines()
            trainer.train(chats)
except Exception as e:
    print(f"An error occurred: {e}")

# # Training with English Corpus Data
# trainer_corpus = ChatterBotCorpusTrainer(bot)
# trainer_corpus.train('chatterbot.corpus.english.greetings')
