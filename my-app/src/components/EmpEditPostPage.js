import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

class EmpEditPostPage extends React.Component {
  render () {
    return (
      <div>
				<EmployerHeader />
        <h2>Edit Job Posting</h2>
        <p>Job Title: 
        	<TextField 
        		hintText="...edit job title..."
        		fullWidth={true}
        	/>
        </p>
        
        <p>Job Description: 
        	<TextField
			      hintText="...edit job description..."
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
			      rows={2}
			      fullWidth={true}
			    />
    		</p>

    		<p>Job Skills/Requirements: 
    			<TextField 
    				hintText="...edit job requirements..."
    				fullWidth={true}
    			/>
    		</p>
        <p>Company URL: 
        	<TextField 
        		hintText="...edit URL..."
        		fullWidth={true}
        	/>
        </p>
				<RaisedButton 
					containerElement={<Link to="/employer-dash" />}
					label="Cancel" 
					primary={true} 
					fullWidth={true} 
				/>
        <RaisedButton label="Update & Save" secondary={true} fullWidth={true} />
      </div>
    );
  }
}

export default EmpEditPostPage;