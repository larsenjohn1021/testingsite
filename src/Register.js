import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import firebase from "./firebase"

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "700px",
        justifyContent: "center",
        alignItems: "center",

    }
}));
export default function Register() {
    const classes = useStyles();

    const [values, setvalues] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });

    const history = useHistory()

    const handleChange = (prop) => (e) => {
        setvalues({ ...values, [prop]: e.target.value });
    };


    const registerbtn = (e) => {
        e.preventDefault();


        if (!values.email || !values.password || !values.confirmpassword) {
            alert("Please complete the following!")
        }
        else if (values.password !== values.confirmpassword) {
            alert("Password do not match!")
        }
        else {
            // firebase
            firebase
                .auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .then((signedInUser) => {

                    alert("Registered and signed in with" + signedInUser.user.email);
                })
                .catch((error) => {
                    alert(error.message);
                    // ..
                });

        }
    }






    return (
        <div className={classes.root}>
            <p>Get started</p>
            <h1>Create a new Account</h1>
            {/* <TextField id="FirstName" required label="First Name" variant="outlined" />
            <TextField id="MiddleName" label="Middle Name" variant="outlined" />
            <TextField id="LastName" required label="Last Name" variant="outlined" />
            <TextField id="StudentID" type="number" required label="Student ID" variant="outlined" /> */}



            <TextField
                id="email"
                required
                label="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange("email")}
            />


            <TextField
                id="password"
                type="password"
                required
                label="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange("password")}
            />


            <TextField
                id="confirmpassword"
                type="password"
                required
                label="confirmpassword"
                variant="outlined"
                value={values.confirmpassword}
                onChange={handleChange("confirmpassword")}
            />


            {/* <TextField id="PhoneNumber" type="number" required label="Phone Number" variant="outlined" /> */}


            <Button
                onClick={registerbtn}
                variant="contained"
                color="secondary">
                Sign up
            </Button>
            <p>Already have an Account?</p>
            <Link to='/login' >
                SIGN IN
            </Link>
        </div>
    )
}
