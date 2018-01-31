import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
 
const Index = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <Index />,
  document.getElementById('root')
);