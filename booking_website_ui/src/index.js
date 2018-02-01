import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Test from './Test';
 
const App = () => (
  <MuiThemeProvider>
    <Test />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);