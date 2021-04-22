import React, { useContext } from 'react';
import { IconButton, Typography, makeStyles, Paper } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
// import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: 2,
    marginRight: 6,
    color: '#000000',
  },
  buttons: {
    marginTop: 20,
    borderRadius: '40px',
  },
  paper: {
    marginTop: 10,
    padding: '10px 20px',
    borderRadius: '40px',
  },
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Paper elevation={10} className={classes.paper}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography className={classes.text} variant='h4'>
              {call.name || 'User'} is calling...
            </Typography>
            <IconButton
              aria-label='answerCall'
              style={{ backgroundColor: '#aed581', color: 'white' }}
              onClick={answerCall}
            >
              <Phone />
            </IconButton>
            {/* <IconButton
              aria-label='rejectCall'
              style={{ backgroundColor: '#ff1744', color: 'white' }}
              onClick={rejectCall}
            >
              <PhoneDisabledIcon />
            </IconButton> */}
          </div>
        </Paper>
      )}
    </>
  );
};

export default Notifications;
