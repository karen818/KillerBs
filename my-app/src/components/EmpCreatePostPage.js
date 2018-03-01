import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';
import { submitCreateJob } from '../actions/employerActions';

class EmpCreatePostPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      companyName: '',
      jobDescription: '',
      skills: '',
      url: '',
      location: ''
		};
	}

	handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    submitCreateJob(this.state);
  }

  render () {
    return (
      <div>
				<EmployerHeader />
        <h1>EmpCreatePostPage.js</h1>
        <h2>Jorb Creator 9000</h2>

			<form onSubmit={this.handleSubmit}>
        <p>Job Title: 
					<TextField 
						name="jobTitle"
        		hintText="...enter job title..."
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.jobTitle}
        	/>
        </p>

				<p>Company Name: 
        	<TextField
						name="companyName"
			      hintText="...enter company name..."
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
			      rows={2}
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.companyName}
			    />
    		</p>
        
        <p>Job Description: 
        	<TextField
						name="jobDescription"
			      hintText="...enter job description..."
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
			      rows={2}
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.jobDescription}
			    />
    		</p>

    		<p>Job Skills/Requirements: 
					<TextField 
						name="skills"
    				hintText="...enter job requirements..."
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.skills}
    			/>
    		</p>
        <p>Company URL: 
					<TextField 
						name="url"
        		hintText="...enter URL..."
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.url}
        	/>
        </p>
				<p>Location: 
					<TextField 
						name="location"
        		hintText="...enter location..."
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.location}
        	/>
        </p>
				<RaisedButton 
					label="Submit" 
					primary={true} 
					fullWidth={true} 
					type="submit"
				/>
				<RaisedButton 
					containerElement={<Link to="/employer/dash" />}
					label="Cancel" 
					secondary={true} 
					fullWidth={true} 
				/>
			</form>

      </div>
    );
  }
}

export default EmpCreatePostPage;