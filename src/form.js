import React, { useState } from 'react';
import './App.css';

function Form({ messageList, setMessageList }) {

    
    const [message, setMessage] = useState({ autor: '', text: ''});
    const handleChangeAuthor = (e) => { setMessage({ ...message, autor: e.target.value }) }; 
    const handleChangeMassage = (e) => { setMessage({ ...message, text: e.target.value }) }; 
    const handleKlick = () => {    
        if (message.autor.length !== 0 && message.text.length !== 0) {
            setMessageList([...messageList, message]);
            setMessage({ autor: '', text: '' });
        }
    };


    return (
        <div className="App">
        <header>
            <div className="chatInput container">
            <input type="text" placeholder="autor" className="chatInput__author" onChange={handleChangeAuthor} value={message.autor}></input>
            <input type="text" placeholder="text" className="chatInput__text" onChange={handleChangeMassage} value={message.text}></input>
            <button onClick={handleKlick}>Klick</button>
            </div>

        </header>
        </div>
    );
}

export default Form;