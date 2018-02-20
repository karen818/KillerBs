import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';


const style = {
  margin: 12,
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleSubmit(event) {
    alert('LoginPage --> '
      + this.state.email + ' | '
      + this.state.password + ' | '
    );
    event.preventDefault();
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Find A Job!</h1>

      <form onSubmit={this.handleSubmit}>

        <div>Email:
          <TextField style={style}
            hintText="Must use ACC email"
            name="email"
            value={this.setState.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <br />
        <div>Password:
          <TextField style={style}
            hintText="Enter password here"
            name="password"
            value={this.setState.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <a href="#">forgot password?</a>
        <br />
        <RaisedButton 
          label="Login" 
          primary={true} 
          style={style} 
          type="submit"
        />
        <Divider />
        <h3>Sign up</h3>
        <RaisedButton 
          containerElement={<Link to="/student-signup" />} 
          label="Student" 
          primary={true} 
          style={style} 
        />
        <RaisedButton 
          containerElement={<Link to="/employer-signup" />} 
          label="Employer" 
          primary={true} 
          style={style} 
        />

      </form>

      </div>
    );
  }
}

export default LoginPage;
