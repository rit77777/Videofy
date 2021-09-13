import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    borderRadius: '20px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    gridGap: '0 10px',
    gridAutoRows: '10px',
  },
  myContainer: {
    padding: '4px',
    margin: '10px',
    borderRadius: '20px',
  },
  userContainer: {
    padding: '4px',
    margin: '10px',
    borderRadius: '20px',
  },
  text: {
    marginLeft: '30px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.myContainer}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.text} variant='h5'>
              {name || 'You'}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.userContainer}>
          <Grid item xs={12} md={6}>
            <Typography className={classes.text} variant='h5'>
              {call.name || 'User'}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
