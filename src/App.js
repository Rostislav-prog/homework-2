import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './Chart';
import ChartArray from './ChartArray';
import Form from './Form';
import useDidMountEffect from './UseDidMountEffect';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {

  const [messageList, setMessageList] = useState([]);
  
  useDidMountEffect(() => {
    const t = setTimeout(() => {
      alert('Сообщение отправлено');
    }, 500);
  }, [messageList]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
      <ChartArray messageList={messageList} />
      <Chart messageList={messageList} />
      <Form messageList={messageList} setMessageList={setMessageList} />
      </Container>
    </>
  );
}
  
export default App;