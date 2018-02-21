import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

class EmployerSignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      password: '',
      retypePassword: '',
      url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRetypePasswordChange = this.handleRetypePasswordChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);

  }

  handleSubmit(event) {
    alert('EmployerSignupPage --> '
      + this.state.firstName + ' | '
      + this.state.lastName + ' | '
      + this.state.companyName + ' | '
      + this.state.email + ' | '
      + this.state.password + ' | '
      + this.state.retypePassword + ' | ' 
      + this.state.url + '.'
    );
    event.preventDefault();
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleCompanyNameChange(event) {
    this.setState({companyName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleRetypePasswordChange(event) {
    this.setState({retypePassword: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }

  render() {
    return (
      <div>
        <EmployerHeader />
        <h1>EmployerSignupPage.js</h1>
        <h2>Tell us a little about yourself...</h2>
        <p>Company logo:
        		<FloatingActionButton mini={true} style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </p>

        <form onSubmit={this.handleSubmit}>

        <p>First Name:
          <TextField
            name="firstName"
            hintText="First name"
            onChange={this.handleFirstNameChange}
            value={this.setState.firstName}
          />
        </p>
        <p>Last Name: 
          <TextField 
            name="lastName"
            hintText="Last name" 
            onChange={this.handleLastNameChange} 
            value={this.setState.lastName} 
          />
        </p>
        <p>Company Name: 
          <TextField 
            name="companyName"
            hintText="Enter company name" 
            onChange={this.handleCompanyNameChange} 
            value={this.setState.companyName} 
          />
        </p>
        <p>Email: 
          <TextField 
            name="email"
            hintText="Must use ACC email" 
            onChange={this.handleEmailChange} 
            value={this.setState.email} 
          />
        </p>
        <p>Password: 
          <TextField 
            name="password"
            hintText="Password requirements go here" 
            onChange={this.handlePasswordChange} 
            value={this.setState.password} 
          />
        </p>
        <p>Re-type password: 
          <TextField 
            name="retypePassword"
            hintText="Re-enter password for veriication" 
            onChange={this.handleRetypePasswordChange} 
            value={this.setState.retypePassword} 
          />
        </p>
        <p>URL: 
          <TextField 
            name="url"
            hintText="Enter URL" 
            onChange={this.handleUrlChange} 
            value={this.setState.url} 
          />
        </p>

        <RaisedButton 
          label="Submit" 
          primary={true} 
          style={style} 
          type="submit"
        />
        <RaisedButton
          containerElement={<Link to="/employer-dash" />}
          label="Cancel"
          secondary={true}
          style={style}
        />

        </form> 

      </div>

    );
  }
}

export default EmployerSignupPage;