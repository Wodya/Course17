import React, {useState, useEffect} from "react";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeComp from "./Components/Home"
import ChatComp from './Components/Chat'
import AppBarComp from "./AppBarComp";

const menu = [{name: "Домашняя страница", path: "/"},
  { name: "Чаты", path: "/chat"}];

function App() {
  return (
    <Router>
      <AppBarComp />
      <Switch>
        <Route exact path="/">
          <HomeComp/>
        </Route>
        <Route path="/chat">
          <ChatComp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
