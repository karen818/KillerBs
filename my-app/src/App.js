import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

// test imports
import LoginPage from './components/LoginPage';
import StudentSignupPage from './components/StudentSignupPage';
import EmployerSignupPage from './components/EmployerSignupPage';
import StudentDashboardPage from './components/StudentDashboardPage';
import EmployerDashboardPage from './components/EmployerDashboardPage';
import EditStudentAcctPage from './components/EditStudentAcctPage';
import JobPostedPage from './components/JobPostedPage';
import EmpCreatePostPage from './components/EmpCreatePostPage';
import EmpEditPostPage from './components/EmpEditPostPage';
import EditEmployerAcctPage from './components/EditEmployerAcctPage';
// test imports

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>

          <LoginPage />
          <EditEmployerAcctPage />
          
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
