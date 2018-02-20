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
  render () {
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
        	<p>First Name: <TextField hintText="First name"/></p>
          <p>Last Name: <TextField hintText="Last name"/></p>
        	<p>Company Name: <TextField hintText="Enter company name"/></p>
        	<p>Email: <TextField hintText="Must use ACC email"/></p>
        	<p>Password: <TextField hintText="Password requirements go here"/></p>
        	<p>Re-type password: <TextField hintText="Re-enter password for veriication"/></p>

        <RaisedButton label="Submit" primary={true} style={style} />
        <RaisedButton 
          containerElement={<Link to="/employer-dash" />} 
          label="Cancel" 
          secondary={true} 
          style={style} 
        />
      </div>

    );
  }
}

export default EmployerSignupPage;