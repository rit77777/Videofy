import React from 'react';
import {
  Typography,
  AppBar,
  Container,
  Toolbar,
  makeStyles,
} from '@material-ui/core';

import logo from '../pics/3.svg';
import '../styles.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#212121',
    padding: 2,
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: theme.spacing(2),
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
