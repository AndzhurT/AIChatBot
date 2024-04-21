import './App.css';
import React, { useState, useRef, useEffect} from 'react';

function App() {

  function Message(text, from) { 
    this.text = text;
    this.from = from;
  }

  const textInputElement = useRef(null);

  let messages = [
    new Message("Heyyyyy", "user"),
    new Message("Yoooooooo", "bot"),
    new Message("Whats up", "bot"),
    new Message("nm wbu", "user")
  ]

  const [messageList, setMessageList] = useState([...messages]);

  const userStyle1 = 'col-start-1 col-end-8 p-3 rounded-lg';
  const botStyle1 = 'col-start-6 col-end-13 p-3 rounded-lg';

  const userStyle2 = 'flex flex-row items-center';
  const botStyle2 = 'flex items-center justify-start flex-row-reverse';

  const userStyle3 = 'relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl';
  const botStyle3 = 'relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl';



  const handleClick = () => {
    const inputValue = textInputElement.current.value.trim();

    if (inputValue !== '') {
      setMessageList([...messageList, new Message(inputValue, 'user')]);
      textInputElement.current.value = '';
    }
    console.log(textInputElement);
  }

  


  return (
    <div>
{/*https://tailwindcomponents.com/component/quickchat-chat-layout*/}
<div className="flex h-screen antialiased text-gray-800">
    <div className="flex flex-row h-full w-full overflow-x-hidden">
      <div className="flex flex-col flex-auto h-full p-6">
        <div
          className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
        >
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">

                {messageList.map((message) => (
                  <div className={(message.from === 'bot') ? botStyle1 : userStyle1}>
                  <div className={(message.from === 'bot') ? botStyle2 : userStyle2}>
                    <div
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      className={(message.from === 'bot') ? botStyle3 : userStyle3}
                    >
                      <p>{message.text}</p>
                    </div>
                  </div>
                </div>
                ))}


              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            <div>
              <button
                className="flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  ref={textInputElement}
                />
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                onClick={handleClick}
              >
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
