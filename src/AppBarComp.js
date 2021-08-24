import React, {useState, useEffect} from "react";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useLocation
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  menuLink: {
    marginRight : "15px",
    textDecoration : "none",
    color : "white"
  },
  menuLinkActive: {
    textDecoration : "underline" ,
  },
  appBar: {
    marginBottom: "15px",
  }

}));

const menu = [{name: "Домашняя страница", path: "/"},
  { name: "Чаты", path: "/chat"}];

function AppBarComp() {
  const classes = useStyles();
  const location = useLocation();

  return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {menu.map((p,i) =>
            <Link key={i} className={`${classes.menuLink} ${p.path === location.pathname?classes.menuLinkActive:""}`} to={p.path}>{p.name}</Link>)
          }
        </Toolbar>
      </AppBar>
  );
}

export default AppBarComp;
