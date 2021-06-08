
import React, { useState } from 'react';
import clsx from 'clsx';
import firebase from "./firebase"
import { Link } from 'react-router-dom'
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import citelogoT from './image/citelogoT.png';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: '37ch',
  },


}));



export default function Login() {
  const [log, setlog] = useState({
    email: "",
    password: "",
    showPassword: false,
  });




  const handleChange = (prop) => (e) => {
    setlog({ ...log, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setlog({ ...log, showPassword: !log.showPassword });
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();



  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const Signin = (e) => {
    e.preventDefault();

    if (!log.email || !log.password) {
      handleClick()

    }

    else {

      firebase.auth().signInWithEmailAndPassword(log.email, log.password)
        .then((userCredential) => {
          // Signed in
          //   var user = userCredential.user;
          // ...


        })
        .catch((error) => {
          //   var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    };


  }








  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <img src={citelogoT} alt="" height="160px" />
        <h3 align="center" >COLLEGE OF INFORMATION AND TECHNOLOGY AND ENGINEERING</h3>

        <Grid container spacing={2} align="center">
          <Grid item xs={12} >
            <TextField className={(classes.margin, classes.textField)}
              id="User"
              required
              label="Email"
              variant="outlined"
              onChange={handleChange("email")}
              value={log.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />


          </Grid>
          <Grid item xs={12}>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outline">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

              <OutlinedInput
                id="Pass"
                type={log.showPassword ? 'text' : 'password'}
                required
                onChange={handleChange("password")}
                value={log.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {log.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning">
                Please complete the following!
              </Alert>
            </Snackbar>

            <Button className={clsx(classes.margin, classes.textField)}
              onClick={Signin}
              id="LoginBtn"
              variant="contained"
              color="secondary">
              Login <FingerprintIcon style={{ fontSize: 28 }}
              />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <p>Create an Account?
              <Link to='/register' style={{ textDecoration: 'none', color: 'blue' }}>
                SIGN UP
              </Link></p>
          </Grid>
        </Grid>
      </div>

    </Container >
  )
}
