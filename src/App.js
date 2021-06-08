import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Profile from './Profile';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Registerprofile from './Registerprofile';
import About from './About';
import Home from './Home';
import terms from './terms';
import './App.css';
import { useState, useEffect } from 'react'
import firebase from "./firebase"
import Privateroute from './private/Privateroute'
import Publicroute from './private/Publicroute'
import Privateaccountprofile from './private/Privateaccountprofile';
import Privatehome from './private/Privatehome';
import Privatefile from './private/Privatefile';
import Privateschedule from './private/Privateschedule';
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme";

export default function App() {

  const [values, setValues] = useState({
    isAuth: false,
    isLoading: true,
  });




  useEffect(() => {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setValues({ isAuth: true, isLoading: false });
   
      } else {
        // No user is signed in.
        setValues({ isAuth: false, isLoading: false });
      }
    });
  }, []);

  if (values.isLoading) {
    return <p>Loading...</p>

  }



  return (

    <ThemeProvider theme={theme}>



      <Router>
    
        <Publicroute isAuth={values.isAuth} restricted={true} component={Navbar}/>
        <Switch>


          <Publicroute path="/" isAuth={values.isAuth} restricted={true} exact component={Home} />
          <Publicroute path="/login" isAuth={values.isAuth} restricted={true} component={Login} />
          <Publicroute path="/about" isAuth={values.isAuth} restricted={true} component={About} />
          <Publicroute path="/register" isAuth={values.isAuth} restricted={true} component={Register} />
          <Publicroute path="/terms" component={terms} />
          <Publicroute path="/registerprofile" isAuth={values.isAuth} restricted={true} component={Registerprofile} />



        </Switch>


        <Privateroute isAuth={values.isAuth} exact component={Profile}/>

        <Switch>



          <Privateroute path="/accounthomepage" isAuth={values.isAuth} exact component={Privatehome} />
          <Privateroute path="/profile" isAuth={values.isAuth} component={Privateaccountprofile} />
          <Privateroute path="/privatefile" isAuth={values.isAuth} component={Privatefile} />
          <Privateroute path="/privateschedule" isAuth={values.isAuth} component={Privateschedule} />
          {/* <Privateroute path="/registerprofile" isAuth={values.isAuth} component={Registerprofile} /> */}



        </Switch>





      </Router>
    </ThemeProvider>




  );



}