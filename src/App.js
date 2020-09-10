import React from 'react';
import './App.css';
import theme from './theme';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import GithubCompare from './container/GithubCompare';
import { store } from './store/store';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <GithubCompare />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
