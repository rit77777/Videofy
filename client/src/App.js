import React, { useContext } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import CallOption from './components/CallOption';
import Notifications from './components/Notifications';
import NavBar from './components/NavBar';
import Error from './components/Error';

import { SocketContext } from './SocketContext';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {
  const classes = useStyles();
  const { message } = useContext(SocketContext);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.wrapper}>
        <NavBar />
        {message ? <Error /> : <VideoPlayer />}
        <Notifications />
        <CallOption />
      </div>
    </ThemeProvider>
  );
};

export default App;
