import React, { Component, useEffect } from 'react';
import TextBox from './component/textbox';
import axios from 'axios';
import MessageBox from './component/messagebox';
import './App.css';

axios.defaults.withCredentials = true;

class App extends Component {

    constructor(){
        super();
        this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
        this.state = {
            messages: [
                {
                    type: 1,
                    text: "Hello! How are you doing today?",
                    type: 2,
                    text: "Hello, would you like to chat with Comcast? How can I help?"
                }
            ]
        }
    }

    // function getData() {
    //     axios({
    //         method: "GET",
    //         url:"/ask",
    //     })
    //     .then((response) => {
    //         const res = response.data
    //         this.state.messages.concat([{
    //             text: res.message
    //         }])
    //     })
    // }

    handleNewUserMessage(text){
        this.setState({
            messages: this.state.messages.concat([{
                text: text[0].text,
                type: 0,
            }])
        });
        
        let temp = {
            msg: text[0].text
        };
        console.log('temp: ',temp);
        axios.post('http://localhost:5000/ask',{temp})
            .then(res =>{
                console.log('res.data: ',res.data);
                this.setState({
                    messages: this.state.messages.concat([{
                        text: res.data,
                        type: 1,
                    }])
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
    return (
      <div className="App">
          <div className="messageBox">
            <MessageBox messageContent={this.state.messages}/>
          </div>
          <TextBox handlerFromParant={this.handleNewUserMessage}/>
      </div>
    );
  }
}

export default App;
