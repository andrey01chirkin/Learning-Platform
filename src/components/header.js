import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Route, NavLink} from 'react-router-dom'
import '../index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink to='/' style={{textDecoration: 'none', color: 'White'}}>Курсы по программированию </NavLink>
          </Typography>
          <NavLink to='/signUp' className='btn'>
            <Button color="inherit">Регистрация</Button>
          </NavLink>
          <NavLink to='/signIn' className='btn'>
            <Button color="inherit">Авторизация</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
