import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import './App.css';

const styles = {
  flexContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  }
}

class App extends Component {
  state = {
    open: false
  };

  handleLogin = () => {
    
  }

  handleOpen = () =>
    this.setState({ open: true });

  handleClose = () =>
    this.setState({ open: false });

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this.handleLogin}
      />,
    ];
    return (
      <div>
        <AppBar
          title={'Damage Printer'}
          iconElementRight={<FlatButton label="Login" onTouchTap={this.handleOpen}/>}
        />
        <Dialog
          title="Login to ArcGIS Online"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <div style={styles.flexContainer}>
            <TextField
              floatingLabelText="Username"
            />
            <TextField
              floatingLabelText="Password"
              type="password"
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default App;
