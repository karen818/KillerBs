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
    
    event.preventDefault();

    const data = new FormData(event.target);

    fetch('http://localhost:3000/api/data',{
      method: 'POST',
      body: data,
    })
    .then(res => {
      console.log('You clicked the submit button! Here is the response ' + res)
    })
    .catch(err => {
      console.log(err)
    });

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
              type='text'
              floatingLabelText='First Name'              
              hintText='...type your first name here'
              value={this.state.value} 
              onChange={this.handleChange} 
            />                       
          </p>

          <p>          
            <TextField 
              name='lastName'
              type='text'
              floatingLabelText='Last Name'
              hintText='...type your last name here'                    
              value={this.state.value} 
              onChange={this.handleChange} 
            />                      
          </p>

          <p>           
            <TextField 
              //future version may include major selector from prepopulated list
              name='major'
              type='text'
              floatingLabelText='Field of Study'
              hintText="...type your major here" 
              value={this.state.value} 
              onChange={this.handleChange} 
            />                        
          </p>

          <p>                      
            <TextField 
              //future version may include checkbox to select from prepopulated list
              name='skills'
              type='text'
              floatingLabelText='Skills'
              hintText='...list your skills'
              multiLine={false}
              //rows={2}
              fullWidth={false}
              value={this.state.value} 
              onChange={this.handleChange} 
            />                         
          </p>

          <p>                      
            <TextField 
              name='email'
              type='text'
              floatingLabelText='Email address'
              hintText='...type your email address'
              value={this.state.value} 
              onChange={this.handleChange} 
            />                      
          </p>  

          <p>                 
            <TextField 
              name='password'
              type='text'
              floatingLabelText='Create a password'
              type='password'
              hintText="...create a password" 
              value={this.state.value} 
              onChange={this.handleChange} 
            />                      
          </p>  
            
          <p>                     
            <TextField 
              name='password'
              type='text'
              floatingLabelText='Re-enter password'
              type='password'
              hintText='...re-enter password for verification' 
              value={this.state.value} 
              onChange={this.handleChange} 
            />                      
          </p>

            <RaisedButton 
              label="Submit" 
              primary={true} 
              style={style} 
              type='submit'
              onSubmit={this.handleSubmit}/>
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