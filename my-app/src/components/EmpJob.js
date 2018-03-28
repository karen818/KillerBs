import React from 'react';

export default class EmpJob extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render () {
		var {job} = this.props;
		return(
			<div>
				<h6>{job.jobTitle}</h6>
			</div>
		)
	}
}

