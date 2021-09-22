import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import Cats from "./Cats";
import Home from "./Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
  },
}));

export const firebaseConfig = {
  apiKey: "AIzaSyAz-SF6XEZPEtAFPQbqWdXviHxQ4b9bl7o",
  authDomain: "course17-react-wodya.firebaseapp.com",
  databaseURL: "https://course17-react-wodya-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "course17-react-wodya",
  storageBucket: "course17-react-wodya.appspot.com",
  messagingSenderId: "484595715507",
  appId: "1:484595715507:web:6e8eb94dda91285559cfc6"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
  const classes = useStyles();

  const [user, loading] = useAuthState(firebase.auth());

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <Router>
      <div className={classes.mainWrapper}>
        {/* <AppBar /> */}

        <Switch>
          <CustomRoute secured path="/chat/:id">
            <Chat />
          </CustomRoute>

          <CustomRoute path="/playground" secured withAppBar={true}>
            <Playground myProps={1} />
          </CustomRoute>

          <Route path="/cats" secured withAppBar={true}>
            <Cats />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" withAppBar={false}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
