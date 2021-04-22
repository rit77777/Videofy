import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  alert: {
    marginTop: '60px',
    marginBottom: '50px',
    width: '50%',
  },
}));

const Error = () => {
  const classes = useStyles();

  return (
    <Alert className={classes.alert} severity='error'>
      <AlertTitle>
        <strong>Please allow permissions.</strong>
      </AlertTitle>
      You <strong>cannot place or receive</strong> a call without granting{' '}
      <strong>video and audio permissions!</strong> Please change your settings
      to use this app.
    </Alert>
  );
};

export default Error;
