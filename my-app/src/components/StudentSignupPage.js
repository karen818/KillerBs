import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 12,
};

class StudentSignUpPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Tell us a little about yourself...</h2>
        
        <p>First Name: <TextField hintText="First name" /></p>
        <p>Last Name: <TextField hintText="Last name" /></p>
        <p>Major/Field of Study: <TextField hintText="e.g. Software Development" /></p>
        <p>Skills: 
        	<TextField
			      hintText="...enter job description..."
			      multiLine={true}
			      // rows={2}
			      fullWidth={false}
			    />
    		</p>
        <p>Email: <TextField hintText="Must use ACC email" /></p>
        <p>Password: <TextField hintText="Password requirements go here" /></p>
        <p>Re-type password: <TextField hintText="Re-enter password for veriication" /></p>


        <RaisedButton label="Submit" primary={true} style={style} />
        <RaisedButton label="Cancel" secondary={true} style={style} />
      </div>

    );
  }
}

export default StudentSignUpPage;