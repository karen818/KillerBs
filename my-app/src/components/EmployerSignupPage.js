import React from 'react';
//import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerHeader from './EmployerHeader';
//import { Link } from 'react-router-dom';

import submitSignup from '../actions/employerActions';

// import axios from 'axios';

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

  const handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  this.handleChange.bind(this);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('state is ', this.state)
    submitSignup(this.state);
  };

  this.handleSubmit.bind(this);

  render() { 
    return (
      <div>
        <EmployerHeader />
        <h1>Employer Signup</h1>
        <h2>Tell us a little about your organization</h2>

        <p>Company logo:
            <FloatingActionButton mini={true} style={style}>
                <ContentAdd />
            </FloatingActionButton>
        </p>

        <p>
          <TextField
            name='companyName'
            type='text'
            floatingLabelText='Company name'
            hintText='...type your company name'
            value={this.state.companyName}
            onChange={this.handleChange}
          />
        </p>

        <p>
          <TextField
            name='firstName'
            type='text'
            floatingLabelText='First name'
            hintText='...type your first name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </p>

        <p>
          <TextField
            name='lastName'
            type='text'
            floatingLabelText='Last name'
            hintText='...type your last name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </p>
        
        <p>
          <TextField
            name='email'
            type='email'
            floatingLabelText='Email'
            hintText='...type your ACC email address'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </p>

        <p>
          <TextField
            name='password'
            type='password'
            floatingLabelText='Password'
            hintText='...create a password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </p>

        <p>
          <TextField
            name='url'
            type='text'
            floatingLabelText='Company URL'
            hintText='...enter company URL'
            value={this.state.url}
            onChange={this.handleChange}
          />
        </p>

        <RaisedButton 
          label="Submit" 
          primary={true} 
          style={style} 
          type="submit"
          onClick={this.handleSubmit}
        />

        {/*this needs to be completed:::    */}

        {/*<RaisedButton*/}
          {/*containerElement={<Link to="/emp*/}

      </div>

    );
  }
}
}