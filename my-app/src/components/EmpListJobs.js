import React from 'react';
import EmpJob from './EmpJob';
import { getJobs } from '../actions/employerActions';

export default class EmpListJobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyId: '',
			jobs: []
		}
	}

	componentDidMount() {
		getJobs()
			.then(data => {
				console.log('in emplistjobs.js ', data)
				this.setState({
					companyId: 'abc',
					jobs: data
				});
			});
	};

	render() {
		return (
			<div>
				<h3>EmpListJobs.js</h3>
				{this.state.jobs.map((job) => (
					(
						<EmpJob job={job} />
					)
				)
				)}

			</div>
		)

	}
}

