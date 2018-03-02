import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EmployerHeader from './EmployerHeader';
import colors from 'material-ui/styles/colors';
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
        <p>
					<TextField 
						name='jobTitle'
						type='text'
						floatingLabelText='Job Title'
						// floatingLabelFixed={true} allows floatingLabelText to always be displayed
        		hintText='...enter job title...'
						fullWidth={false}
						onChange={this.handleChange}
            value={this.state.jobTitle}
        	/>
        </p>

				<p> 
        	<TextField
						name='companyName'
						type='text'
						floatingLabelText='Company Name'
			      hintText='...enter company name...'
						fullWidth={false}
						onChange={this.handleChange}
            value={this.state.companyName}
			    />
    		</p>
        
        <p>
        	<TextField
						name='jobDescription'
						type='text'
						style={{textAlign: 'left'}}
						floatingLabelText='Job Description'
			      hintText='...enter job description'
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.jobDescription}
			    />
    		</p>

    		<p>
					<TextField 
						name='skills'
						type='text'
						floatingLabelText='Job Skills/Requirements'
    				hintText='...enter job requirements...'
						fullWidth={true}
						onChange={this.handleChange}
            value={this.state.skills}
    			/>
    		</p>
        <p> 
					<TextField 
						name='url'
						type='text'
						floatingLabelText='Company URL'
        		hintText='...enter URL...'
						fullWidth={false}
						onChange={this.handleChange}
            value={this.state.url}
        	/>
        </p>
				<p>
					<TextField 
						name='location'
						type='text'
						floatingLabelText='Location'
        		hintText='...enter location...'
						fullWidth={false}
						onChange={this.handleChange}
            value={this.state.location}
        	/>
        </p>
				<RaisedButton 
					label="Submit" 
					primary={true} 
					fullWidth={false} 
					type="submit"
				/>
				<RaisedButton 
					containerElement={<Link to="/employer/dash" />}
					label="Cancel" 
					secondary={true} 
					fullWidth={false} 
				/>
			</form>

      </div>
    );
  }
}

export default EmpCreatePostPage;   			/>
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