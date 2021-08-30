
import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import useDidMountEffect from './UseDidMountEffect';
import { Profile } from './Profile';
import { Main } from './Main';
import { Chat } from './Chat';
import { ROUTES } from './constants';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {

  const[list]=useState();
  const [messageList, setMessageList] = useState([]);
  
  const classes = useStyles();

  useDidMountEffect(() => {
    const t = setTimeout(() => {
      alert('Сообщение отправлено');
    }, 500);
        return () => {
        clearTimeout(t);
      };
  }, [messageList]);

  return (

    <>
      <BrowserRouter>
    <div className={classes.root}>

      <Button variant="outlined" color="primary">
            <Link style={{ textDecoration: "none"}} to={ROUTES.MAIN}>Home</Link>
      </Button>
      <Button variant="outlined" color="primary">
        <Link style={{ textDecoration: "none"}} to={ROUTES.PROFILE}>Profile</Link>
      </Button>
      <Button variant="outlined" color="primary">
        <Link style={{ textDecoration: "none"}} to={ROUTES.CHATS}>Chats</Link>
      </Button>

    </div>

        
        {/* <ul>
          <li>
            <Link to={ROUTES.MAIN}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
          </li>
          <li>
            <Link to={ROUTES.CHATS}>Chats</Link>
          </li>
        </ul> */}
        <Switch>
          <Route exact path={ROUTES.MAIN}>
            <Main list={list} />
          </Route>
          <Route exect path={ROUTES.PROFILE}>
            <Profile />
          </Route>
          <Route exact path={ROUTES.CHATS}>
            <Chat messageList={messageList} setMessageList={setMessageList}/>
          </Route>
          {/* <Route path={ROUTES.CHAT}>
          <Chat />
          </Route> */}
          <Route path={ROUTES.NOT_FOUND}>Page not found 404</Route>
          <Route path="*">
            <Redirect to={ROUTES.NOT_FOUND} />
          </Route>
        </Switch>
        </BrowserRouter>
  
    </>
  );
}
  
export default App;