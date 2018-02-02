import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom'
import Test from './Test';
import Header from './Header';

const App = () => (
    <MuiThemeProvider>
        <Header />
        <Switch>
            <Route exact path='/' component={Test} />
        </Switch>
    </MuiThemeProvider>
)

export default App;