import React, {useEffect, useState} from 'react';
import './App.css';
import Study from "./components/study";
import Search from "./components/search";
import Modify from "./components/modify";
import Login from "./components/login";

import DefaultElement from "./components/default";



import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Settings from './components/settings';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  const [contentType, setContentType] = useState("default")
  
  const defaultButton = () => {
    console.log("studyButton");
    setContentType("default");
  }

  const studyButton = () => {
    console.log("studyButton");
    setContentType("study");
  }
  const searchButton = () => {
    console.log("searchButton");
    setContentType("search");
  }
  const modifyButton = () => {
    console.log("modifyButton");
    setContentType("modify"); 
  }
  const loginButton = () => {
    console.log("loginButton");
    setContentType("login"); 
  }

  const settingsButton = () => {
    console.log("settingsButton");
    setContentType("settings")
  }

  useEffect( () => {
    
    }, [])

  
    return (
      <div className="app" >
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          onClick={settingsButton}>
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={defaultButton}>Default</Button>
          <Button color="inherit" onClick={studyButton}>Study</Button>
          <Button color="inherit" onClick={searchButton}>Search </Button>
          <Button color="inherit" onClick={modifyButton}>Modify </Button>
          <Button color="inherit" onClick={loginButton}>Login</Button>
        </Toolbar>
      </AppBar>

      {(contentType === "default") && (
        <DefaultElement/>
      )}
      {(contentType === "study") && (
        <Study/>
      )}
      {(contentType === "search") && (
        <Search/>
      )}
      {(contentType === "modify") && (
        <Modify/>
      )}
      {(contentType === "login") && (
        <Login/>
      )}
      {(contentType === "settings") && (
        <Settings/>
      )}

      </div>
    );
  
}


export default App;
