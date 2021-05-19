/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from 'react';
// import {useHistory} from 'react-router-dom';
import firebase from "./firebase"
import {Link} from 'react-router-dom'
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// eslint-disable-next-line import/no-anonymous-default-export

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "700px",
        justifyContent: "center",
        alignItems: "center",

    }


}));

export default function Login() {
    const [log, setlog] = useState({
        email: "",
        password: "",
      });

      // const history = useHistory()
;
      const handleChange = (prop) => (e) => {
        setlog({ ...log, [prop]: e.target.value });
      };

      const Signin = (e) => {
        e.preventDefault();
       
        if (!log.email || !log.password)
        {
            alert("please complete the following!")
        }

        else 
        {

            firebase.auth().signInWithEmailAndPassword(log.email, log.password)
            .then((userCredential) => {
              // Signed in
            //   var user = userCredential.user;
              // ...
              alert("signed in!!!")
              
            })
            .catch((error) => {
            //   var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage);
            });
          };
          
        
        }







    const classes = useStyles();
    return (
        <div className={classes.root}>

            <h1>COLLEGE OF INFORMATION AND TECHNOLOGY AND ENGINEERING</h1>
            <TextField 
            id="User" 
            required 
            label="email" 
            variant="outlined"           
            onChange={handleChange("email")}
            value={log.email}
            />



            <TextField
             id="Pass" 
             type="password" 
             required 
             label="Password" 
             variant="outlined"
             onChange={handleChange("password")}
             value={log.password}
            />
            


            <Button 
            onClick={Signin}
            id="LoginBtn" 
            variant="contained" 
            color="secondary">
                Login
            </Button>
            <p>Create an Account?</p>
            <Link to='/register' >
                SIGN UP
            </Link>
        </div>
    )
}
