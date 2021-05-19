import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, } 
from 'react-router-dom';



import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import theme from "./theme";
import { makeStyles } from "@material-ui/core/styles";


import Profile from './Profile';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import About from './About';
import Home from './Home';

// import './App.css';
//import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     height: "700px",
//     justifyContent: "center",
//     alignItems: "center",

//   }
// }));

export default function App() {
  
  // const classes = useStyles();
  // const Home = () => (

  // <div className={classes.root}>

  // <h1>HOME PAGE me</h1>

  //   <Button  variant="contained" color="secondary" >
  //     Login
  //   </Button>

  //   <Button  variant="contained" color="secondary">
  //     SignUp
  //   </Button>
  // </div>
  // )
  return (

    // <Router>
    //   <ThemeProvider theme={theme} >

    //  <Switch> *
    //        <route path="/" exact/> 
    //          <Redirect to="/login" />
    //       </route> 
    //       <Route component={Home} path="/" exact />
    //       <Route component={Login} path="/login" />
    //       <Route component={Register} path="/register" />
    //       <Route component={Profile} path="/profile" />


    //     </Switch>

    //   </ThemeProvider>
    // </Router>


    <>
    
      <Router>
       
        <Navbar/>
        <Switch>
              {/* <route path="/" exact/>  */}
             {/* <Redirect to="/login" /> */}
           
           <Route path="/" exact component={Home}/>
           <Route  path="/login" component={Login} />
            <Route path="/about" component={About} /> */}
           <Route path="/register" component={Register} />
           <Route path="/profile" component={Profile} /> */}
          
        </Switch>
        
      
      </Router>
    </>




  );



}