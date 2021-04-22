import React from 'react';
import {
  Typography,
  AppBar,
  Container,
  Toolbar,
  makeStyles,
} from '@material-ui/core';

import logo from '../3.svg';
import '../styles.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#212121',
    padding: 2,
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // flexGrow: 1,
    marginRight: theme.spacing(2),
    // border: '2px solid red',
  },
  buttons: {
    // width: '100%',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} position='static'>
        <Container maxWidth='md'>
          <Toolbar>
            <img className='logo' src={logo} alt='Logo' />
            <Typography variant='h5'>Videofy</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
