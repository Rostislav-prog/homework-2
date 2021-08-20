import React, { useEffect, useState } from 'react';
import { MessegeList } from './messageList';
import './App.css';
import { Form } from './form';

function App() {

    const [list] = useState([]);
    const [autor, setAutor] = useState('');
    const [text, setText] = useState('');

  useEffect(() => {
    console.log('useeffect');
  }, [list]);

  return (
    <div className="App">
      <header className="App-header">
        <MessegeList  list={list}/>
        <Form autor={autor} setAutor={setAutor} text={text} setText={setText} list={list}/>
      </header>
    </div>
  );
}

export default App;
