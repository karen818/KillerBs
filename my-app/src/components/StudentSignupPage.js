import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StudentHeader from './StudentHeader';

const style = {
  margin: 12,
};


class StudentSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      major: '',
      skills: '',
      email: '',
      password: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log('You clicked the submit button!', e);
  }

  render() {
    return (
      <div>
        <StudentHeader />
        <h2>Tell us a little about yourself...</h2>

      <form name="studentSignupForm" onSubmit={this.handleSubmit}>
        <p>

          <TextField
          //this field represents possible v2 for each field
            name="firstName"
            required="required"
            defaultValue='...type your first name here'
            floatingLabelText='First Name'
            hintText='...type your first name here'
            value={this.state.firstName}
          />

        </p>
        <p>
        <label>
          Last Name:
          <TextField
            name="lastName"
            required="required"
            hintText='...type your last name here'
            value={this.state.lastName}
          />
        </label>
        </p>
        <p>
        <label>
          Major:
          <TextField
            //future version may include major selector from prepopulated list
            name="major"
            required="required"
            hintText="...type your major here"
            value={this.state.major}
          />
        </label>
        </p>
        <p>
        <label>
          Skills:
          <TextField
            //future version may include checkbox to select from prepopulated list
            name="skills"
            required="required"
            hintText="..."
            multiLine={true}
            //rows={2}
            fullWidth={false}
            value={this.state.skills}
          />
        </label>
        </p>
        <p>
        <label>
          Email:
          <TextField
            name="email"
            required="required"
            hintText="First Name"
            value={this.state.email}
          />
        </label>
        </p>
        <p>
        <label>
          Create Password:
          <TextField
            name="password"
            required="required"
            type="password"
            hintText="password"
            value={this.state.password}
          />
        </label>
        </p>
        <p>
        <label>
          Re-type Password:
          <TextField
            name="test"
            type="password"
            hintText="Re-enter password for veriication"
            value={this.state.value}
          />
        </label>
        </p>
          <RaisedButton label="Submit" primary={true} style={style} />
          <RaisedButton label="Cancel" secondary={true} style={style} />
      </form>
    </div>

    );
  }
}
export default StudentSignUpPage;
