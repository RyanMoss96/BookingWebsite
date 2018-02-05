import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Header from './Header';

const App = () => (
    <MuiThemeProvider>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </MuiThemeProvider>
)

export default App;