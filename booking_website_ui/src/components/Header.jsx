import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography'

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}