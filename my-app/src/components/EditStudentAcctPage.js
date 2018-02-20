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

class EditStudentAcctPage extends React.Component {
  render() {
    return (
      <div> 
        <StudentHeader />
        <h2>Edit Your Account Information</h2>
        <p>First Name: <TextField hintText="First name" /></p>
        <p>Last Name: <TextField hintText="Last name" /></p>
        <p>Major/Field of Study: <TextField hintText="e.g. Software Development" /></p>
        <p>Skills: 
        	<TextField
			      hintText="Edit skills/credentials..."
			      multiLine={true}
			      // rows={2}
			      fullWidth={false}
			    />
    		</p>
        <p>Email: <TextField hintText="Must use ACC email if changing" /></p>
        <p>Password: <TextField hintText="Password to change" /></p>
        <p>Re-type password: <TextField hintText="Re-enter password for veriication" /></p>


        <RaisedButton 
          containerElement={<Link to="/student-dash" />} 
          label="Cancel" 
          primary={true} 
          style={style} 
        />
        <RaisedButton label="Update & Save" secondary={true} style={style} />
      </div>

    );
  }
}

export default EditStudentAcctPage;