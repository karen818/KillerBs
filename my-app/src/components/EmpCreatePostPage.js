import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EmpCreatePostPage extends React.Component {
  render () {
    return (
      <div>
        <h1>EmpCreatePostPage.js</h1>
        <h2>Jorb Creator 9000</h2>
        <p>Job Title: 
        	<TextField 
        		hintText="...enter job title..."
        		fullWidth={true}
        	/>
        </p>
        
        <p>Job Description: 
        	<TextField
			      hintText="...enter job description..."
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
			      rows={2}
			      fullWidth={true}
			    />
    		</p>

    		<p>Job Skills/Requirements: 
    			<TextField 
    				hintText="...enter job requirements..."
    				fullWidth={true}
    			/>
    		</p>
        <p>Company URL: 
        	<TextField 
        		hintText="...enter URL..."
        		fullWidth={true}
        	/>
        </p>
        <RaisedButton label="Submit" primary={true} fullWidth={true} />
      </div>
    );
  }
}

export default EmpCreatePostPage;