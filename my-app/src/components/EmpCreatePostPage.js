import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

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
		
		this.handleSubmit = this.handleSubmit.bind(this);

		this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
		this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
		this.handleJobDescriptionChange = this.handleJobDescriptionChange.bind(this);
		this.handleSkillsChange = this.handleSkillsChange.bind(this);
		this.handleUrlChange = this.handleUrlChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
	}

	handleSubmit(event) {
    alert('EmpCreatePostPage --> '
      + this.state.jobTitle + ' | '
      + this.state.companyName + ' | '
      + this.state.jobDescription + ' | '
      + this.state.skills + ' | '
      + this.state.url + ' | '
      + this.state.location + '.'
    );
    event.preventDefault();
	}
	
	handleJobTitleChange(event) {
		this.setState({jobTitle: event.target.value});
	}

	handleCompanyNameChange(event) {
		this.setState({companyName: event.target.value});
	}

	handleJobDescriptionChange(event) {
		this.setState({jobDescription: event.target.value});
	}

	handleSkillsChange(event) {
		this.setState({skills: event.target.value});
	}

	handleUrlChange(event) {
		this.setState({url: event.target.value});
	}

	handleLocationChange(event) {
		this.setState({location: event.target.value});
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
						onChange={this.handleJobTitleChange}
            value={this.setState.jobTitle}
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
						onChange={this.handleCompanyNameChange}
            value={this.setState.companyName}
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
						onChange={this.handleJobDescriptionChange}
            value={this.setState.jobDescription}
			    />
    		</p>

    		<p>Job Skills/Requirements: 
					<TextField 
						name="skills"
    				hintText="...enter job requirements..."
						fullWidth={true}
						onChange={this.handleSkillsChange}
            value={this.setState.skills}
    			/>
    		</p>
        <p>Company URL: 
					<TextField 
						name="url"
        		hintText="...enter URL..."
						fullWidth={true}
						onChange={this.handleUrlChange}
            value={this.setState.url}
        	/>
        </p>
				<p>Location: 
					<TextField 
						name="location"
        		hintText="...enter location..."
						fullWidth={true}
						onChange={this.handleLocationChange}
            value={this.setState.location}
        	/>
        </p>
				<RaisedButton 
					label="Submit" 
					primary={true} 
					fullWidth={true} 
					type="submit"
				/>
				<RaisedButton 
					containerElement={<Link to="/employer-dash" />}
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