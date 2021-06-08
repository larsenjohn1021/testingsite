import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import firebase from "./firebase"
import "firebase/firestore";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "500px",
        justifyContent: "center",
        alignItems: "center",

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },

    large: {
        color: 'blue',
        height: '170px',
        width: '170px',
    }
}));
export default function Privateaccountprofile() {

    const classes = useStyles();

    const [values, setvalues] = useState({

        FullName: "",
        contact: "",
        studentID: "",

        email: "",
        password: "",
        confirmpassword: "",
    });


    const handleChange = (prop) => (e) => {
        setvalues({ ...values, [prop]: e.target.value });
    };



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.root}>
                <Avatar className={classes.large}>
                    <AccountCircleIcon style={{ fontSize: 180 }} />
                </Avatar>


                <Link to='/login' >
                    Edit
                </Link>

                <Grid container spacing={2} align="center">
                    <Grid item xs={12}>
                        <TextField
                            id="FullName"
                            required
                            label="Full Name"
                            variant="outlined"
                            value={values.firstName}
                            onChange={handleChange("FullName")}               
                            disabled
                            size="small"
                        />

                    </Grid>



                    <Grid item xs={12} align="center">
                        <TextField
                            id="StudentID"
                            type="number"
                            required
                            label="Student ID"
                            variant="outlined"
                            value={values.studentID}
                            onChange={handleChange("studentID")}                         
                            disabled
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="PhoneNumber"
                            type="number"
                            required
                            label="Phone Number"
                            variant="outlined"
                            value={values.studentID}
                            onChange={handleChange("phoneNumber")}                           
                            disabled
                            size="small"
                        />


                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="email"
                            required
                            label="email"
                            variant="outlined"
                            value={values.email}
                            onChange={handleChange("email")}                            
                            disabled
                            size="small"
                        />

                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            id="password"
                            type="password"
                            required
                            label="password"
                            variant="outlined"
                            value={values.password}
                            onChange={handleChange("password")}                           
                            disabled
                            size="small"
                        />

                    </Grid>

                </Grid>

            </div>
        </Container>


    )
}
