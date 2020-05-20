
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


import Hidden from '@material-ui/core/Hidden';

export default function useAppBar() {
  const classes = {
    root: {
    },
    menuButton: {
      marginRight: "2px",
    },
    title: {
      flexGrow: 1,
    },
    usersButton: {
      marginLeft: "auto",
    },
    button: {
      backgroundColor: "black",
      margin: "5px",
      color: "white"
    },

    inputText: {
      width: "200px",
      margin: "5px"
    }
  }

  const [values, setValues] = React.useState({
    user: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginUserAction = () => {
    let currentUser = values.user
    let currentPassword = values.password
    console.log(currentUser, currentPassword)
  };

  const registerUserAction = () => {
    let currentUser = values.user
    let currentPassword = values.password
    console.log(currentUser, currentPassword)
  };
  
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" style={classes.title}>
            CHAO
          </Typography>

          <div style={classes.usersButton}>
            <Hidden smDown>
              <TextField
                style={classes.inputText}
                id="input-with-icon-textfield"
                onChange={handleChange('user')}
                label="Usuario"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl style={classes.inputText}>
                <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Hidden>

            <Button style={classes.button} color="inherit" onClick={loginUserAction}>ENTRAR</Button>
            <Button style={classes.button} color="inherit" href="/registro">REGISTRARSE</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}