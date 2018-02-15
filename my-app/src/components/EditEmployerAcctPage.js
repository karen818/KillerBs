import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EmployerHeader from './EmployerHeader';

const style = {
  margin: 12,
};

class EditEmployerAcctPage extends React.Component {
  render() {
    return (
      <div>
        <EmployerHeader />
        <h2>Edit Your Account Information</h2>
        	<p>Company logo: 
        		<FloatingActionButton mini={true} style={style}>
      				<ContentAdd />
    				</FloatingActionButton>
    			</p>
        	<p>First Name: <TextField hintText="First name"/></p>
          <p>Last Name: <TextField hintText="Last name"/></p>
        	<p>Company Name: <TextField hintText="Edit company name"/></p>
        	<p>Email: <TextField hintText="Must use ACC email if changing"/></p>
        	<p>Password: <TextField hintText="Password to be changed"/></p>
        	<p>Re-type password: <TextField hintText="Re-enter password for veriication"/></p>

        <RaisedButton label="Cancel" primary={true} style={style} />
        <RaisedButton label="Update & Save" secondary={true} style={style} />
      </div>

    );
  }
}

export default EditEmployerAcctPage;