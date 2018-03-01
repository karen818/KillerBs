import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

import { submitSignup } from '../actions/employerActions';

// import axios from 'axios';

const style = {
  margin: 12,
};

class EmployerSignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'firstName',
      lastName: 'lastName',
      companyName: 'companyName',
      email: 'email@gmail.com',
      password: 'password',
      retypePassword: 'retypePassword',
      url: 'www.url.com'
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
    // alert('EmployerSignupPage --> '
    //   + this.state.firstName + ' | '
    //   + this.state.lastName + ' | '
    //   + this.state.companyName + ' | '
    //   + this.state.email + ' | '
    //   + this.state.password + ' | '
    //   + this.state.retypePassword + ' | ' 
    //   + this.state.url + '.'
    // );
    event.preventDefault();

    submitSignup(this.state);

  //   axios.post('/employer/signup', { })
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

        <form  onSubmit={this.handleSubmit}>
        
        <p>
          <TextField
            name='companyName'
            type='text'
            floatingLabelText='Company name'
            hintText='...type your company name'
            value={this.state.companyName}
            onChange={this.handleCompanyNameChange}          
          />
        </p>

        <p>
          <TextField
            name='firstName'
            type='text'
            floatingLabelText='First name'
            hintText='...type your first name'
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}            
          />
        </p>

        <p>
          <TextField
            name='lastName'
            type='text'
            floatingLabelText='Last name'
            hintText='...type your last name'
            value={this.state.lastName}
            onChange={this.handleLastNameChange}            
          />
        </p>
        
        <p>
          <TextField
            name='email'
            type='email'
            floatingLabelText='Email'
            hintText='...type your ACC email address'
            value={this.state.email}
            onChange={this.handleEmailChange}            
          />
        </p>

        <p>
          <TextField
            name='password'
            type='password'
            floatingLabelText='Password'
            hintText='...create a password'
            value={this.state.password}
            onChange={this.handlePasswordChange}            
          />
        </p>

        <p>
          <TextField
            // updated this textfield to match password above 
            // this field is not saving data, only validating against password
            name='retypePassword'
            type='password'
            floatingLabelText='Retype password'
            hintText='...re-enter password for verification'
            value={this.state.retypePassword}
            onChange={this.handleRetypePasswordChange}
          />
        </p>

        <p>
          <TextField
            name='url'
            type='text'
            floatingLabelText='Company URL'
            hintText='...enter company URL'
            value={this.state.url}
            onChange={this.handleUrlChange}  
          />
        </p>

        <RaisedButton 
          label="Submit" 
          primary={true} 
          style={style} 
          type="submit"
        />
        <RaisedButton
          containerElement={<Link to="/" />}
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