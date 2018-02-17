import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StudentHeader from './StudentHeader';
import { Link } from 'react-router-dom';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    //handles when text values in form are updated
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('You clicked the submit button!');
    event.preventDefault();
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
              defaultValue='...type your first name here'
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
              name='test'
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
              name='test'
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
    );
  }
}
export default StudentSignUpPage;