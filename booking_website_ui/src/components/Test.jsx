import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography'

const styles = {
  paper: {
    margin: '10px',
  },
};

class Test extends Component {
  render() {
    const {classes} = this.props;
    return (
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
        </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
        </Typography>
        </Paper>
    );
  }
}

export default withStyles(styles)(Test);
