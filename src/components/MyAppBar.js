
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import useMediaQuery from '@material-ui/core/useMediaQuery';


class MyAppBar extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      showPassword: false,
    }
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  };

  handleMouseDownPassword = (event) => {
    //event.preventDefault();
  };

  render() {
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
   
      inputText:{
        width: "200px",
        margin: "5px"
      }
    }

    return (<div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CHAO
          </Typography>

          <div style={classes.usersButton}>
            <TextField
              style={classes.inputText}
              id="input-with-icon-textfield"
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
                type={this.state.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      onMouseDown={this.handleMouseDownPassword()}
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button style={classes.button} color="inherit">ENTRAR</Button>
            <Button style={classes.button} color="inherit" align="right">REGISTRARSE</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    )
  }

}

export default MyAppBar;