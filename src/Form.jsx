import React, { useState, useRef } from 'react';
import './Form.css';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Form({ messageList, setMessageList, children }) {

    const ref = useRef();
    const key = Date.now();
    const [message, setMessage] = useState({ autor: '', text: '', id: key});
    const handleChangeAuthor = (e) => { setMessage({ ...message, autor: e.target.value}) }; 
    const handleChangeMassage = (e) => { setMessage({ ...message, text: e.target.value}) }; 
    const handleKlick = () => {    
        if (message.autor.length !== 0 && message.text.length !== 0) {
            setMessageList([...messageList, message]);
            setMessage({ autor: '', text: '', id: key});
            ref.current?.focus();
        }
    };

    return (
        <div className="App">
        <header>
            <div className="EntryField">
            <TextField autoFocus inputRef={ref} label="autor" variant="outlined" type="text"  className="chatInput__author" onChange={handleChangeAuthor} value={message.autor} />
            <TextField label="text" variant="outlined" type="text"  className="chatInput__text" onChange={handleChangeMassage} value={message.text} />
            <Button onClick={handleKlick} variant="contained" color="primary" disableElevation>
            Klick
            </Button>
            </div>

            <div>{React.Children.map(children, (chield)=>{
                return chield;
            })}</div>

        </header>
        </div>
    );
}

export default Form;