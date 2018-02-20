import React, { Component } from 'react';
import StudentSignUpPage from '../components/StudentSignupPage';

export defaul class Create extends Component {

  handleSubmit(data) {
    console.log('Submitted StudentSignupPage', data);
  }

  render() {
    return (
      <div>
        <StudentSignUpPage onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
