import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './Chart';
import Form from './Form';
import useDidMountEffect from './UseDidMountEffect';



function App() {

  const [messageList, setMessageList] = useState([]);
  
  useDidMountEffect(() => {
    const t = setTimeout(() => {
      alert('Сообщение отправлено');
    }, 500);
    
  }, [messageList]);

  return (
    <>
      <Chart messageList={messageList} />
      <Form messageList={messageList} setMessageList={setMessageList} />
    </>
  );
}
  
export default App;