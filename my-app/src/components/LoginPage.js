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
        <div>Email:
          <TextField style={style}
            hintText="Must use ACC email"
          />
        </div>
        <br />
        <div>Password:
          <TextField style={style}
            hintText="Enter password here"
          />
        </div>
        <a href="#">forgot password?</a>
        <br />
        <RaisedButton label="Login(as student)" primary={true} style={style} />
        <Divider />
        <h3>Sing up</h3>
        <RaisedButton label="Student" primary={true} style={style} />
        <RaisedButton label="Employer" primary={true} style={style} />
      </div>
    );
  }
}

export default LoginPage;
