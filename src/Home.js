import React from 'react';
import './App.css';
import img1 from './image/parallax-bg2.jpg';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
//  textAlign:"center",
display:"flex",
 minHeight: "100vh",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
      backgroundPosition:"fixed",

  },

}));
function Home() {
  const classes = useStyles();
  return (<div className= {classes.root }><img src={img1} alt="" />

   <h1>Public HOMEPAGE</h1></div >
  );
}

export default Home;