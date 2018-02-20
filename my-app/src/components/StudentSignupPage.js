import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StudentHeader from './StudentHeader';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';


const style = {
  margin: 12,
};

class StudentSignUpPage extends Component {

  getInitialState() {
    return {
      firstName: this.props.firstName || 'first name',
      lastName: this.props.lastName || 'last name',
      major: this.props.major || 'major',
      skills: this.props.skills || 'skills',
      email: this.props.email || 'email',
      password: this.props.password || 'password',
      retypePassword: this.props.retypePassword || 'retypePassword'
    }
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleMajorChange(e) {
    this.setState({
      major: e.target.value
    });
  }

  handleSkillsChange(e) {
    this.setState({
      skills: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <StudentHeader />
        <h2>Tell us a little about yourself...</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <TextField
            //this field represents possible v2 for each field
              name='firstName'
              hintText='...type your first name here'
              floatingLabelText='First Name'
              hintText='...type your first name here'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </p>
          <p>
          <label>
            Last Name:
            <TextField
              name='lastName'
              hintText='...type your last name here'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          </p>
          <p>
          <label>
            Major:
            <TextField
              //future version may include major selector from prepopulated list
              name='major'
              hintText="...type your major here"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          </p>
          <p>
          <label>
            Skills:
            <TextField
              //future version may include checkbox to select from prepopulated list
              name='skills'
              hintText="..."
              multiLine={true}
              //rows={2}
              fullWidth={false}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          </p>
          <p>
          <label>
            Email:
            <TextField
              name='email'
              hintText="First Name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          </p>
          <p>
          <label>
            Create Password:
            <TextField
              name='password'
              type='password'
              hintText="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          </p>
          <p>
          <label>
            Re-type Password:
            <TextField
              name='retypePassword'
              type='password'
              hintText='Re-enter password for veriication'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          </p>
            <RaisedButton label="Submit" primary={true} style={style} />
            <RaisedButton
              containerElement={<Link to="/student-dash" />}
              label="Cancel"
              secondary={true}
              style={style}
            />
        </form>
      </div>
    )
  }
};


export default StudentSignUpPage;
