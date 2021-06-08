import React, { useState } from 'react'
import firebase from "./firebase"
import "firebase/firestore";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
} from '@material-ui/pickers';
import citelogoT from './image/citelogoT.png';




const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "1000px",
        justifyContent: "center",
        alignItems: "center",

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },




}));







export default function Registerprofile() {






    const [birthDate, setbirthDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setbirthDate(date);
    };


    const classes = useStyles();
    const [values, setvalues] = useState({

        firstName: "",
        middleName: "",
        lastName: "",
        birthDate: "",
        course: "",
        studentID: "",
        PhoneNumber: "",



    });



    const handleChange = (prop) => (e) => {
        setvalues({ ...values, [prop]: e.target.value });
    };





    const registerbtn = (e) => {
        e.preventDefault();

        const firestore = firebase.database().ref("User Information");
        let data = {
            FirstName: values.firstName,
            MiddleName: values.middleName,
            LastName: values.lastName,
            StudentID: values.studentID,
        };
        firestore.push(data);


        if (!values.email || !values.password || !values.confirmpassword || !values.firstName || !values.lastName || !values.studentID) {
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

        <Container component="main" maxWidth="xs" >
            <CssBaseline />

            <div className={classes.root}>
                <Grid align="center">
                    <img src={citelogoT} alt="" height="160px" />

                    <h3>Get started</h3>
                    <h1>Create a new Account</h1>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="FirstName"
                            required
                            label="First Name"
                            variant="outlined"
                            value={values.firstName}
                            onChange={handleChange("firstName")}
                            fullWidth
                        />

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="LastName"
                            required
                            label="Last Name"
                            variant="outlined"
                            value={values.lastName}
                            onChange={handleChange("lastName")}
                            fullWidth
                        />

                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <TextField
                            id="MiddleName"
                            label="Middle Name"
                            variant="outlined"
                            value={values.middleName}
                            onChange={handleChange("middleName")}
                            fullWidth
                        />

                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="birthdate"
                                    label="Birth date"
                                    format="MM/dd/yyyy"
                                    value={birthDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid item xs={12}>

                        <FormControl variant="outlined" className={classes.formControl} fullWidth required>
                            <InputLabel id="Course">Course</InputLabel>
                            <Select
                                labelId="Course"
                                id="Course"
                                value={values.course}
                                onChange={handleChange("course")}
                                label="Course"

                            >

                                <MenuItem value={"bscoe"}>Bachelor of Science in Computer Engineering</MenuItem>
                                <MenuItem value={"bsie"}>Bachelor of Science in Industrial Engineering</MenuItem>
                                <MenuItem value={"bsit"}>Bachelor of Science in Information Technology</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>



                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="StudentID"
                            type="number"
                            required
                            label="Student ID"
                            variant="outlined"
                            value={values.studentID}
                            onChange={handleChange("studentID")}
                            fullWidth
                        />


                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="Phone Number"
                            type="number"
                            required
                            label="Phone Number"
                            variant="outlined"
                            value={values.PhoneNumber}
                            onChange={handleChange("PhoneNumber")}
                            fullWidth
                        />


                    </Grid>
                </Grid>
                <Button

                    // disabled={!agree}
                    onClick={registerbtn}
                    variant="contained"
                    color="secondary"
                    fullWidth>
                    Sign up
                </Button>



            </div>

        </Container>

    )
}
