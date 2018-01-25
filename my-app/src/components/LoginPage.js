import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Find A Job!</h1>
        <p>Email: 
          <TextField
            hintText="Must use ACC email"
          />
        </p>
        <br />
        <p>Password: 
          <TextField
            hintText="Enter password here"
          />
        </p>
        <a href="#">forgot password?</a>
        <br />
        <RaisedButton label="Login" primary={true} style={style} />
        <Divider />
        <h3>Sing up</h3>
        <RaisedButton label="Student" primary={true} style={style} />
        <RaisedButton label="Employer" primary={true} style={style} />
      </div>
    );
  }
}

export default LoginPage;