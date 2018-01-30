import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

// test imports
import LoginPage from './components/LoginPage';
import StudentSignupPage from './components/StudentSignupPage';
import EmployerSignupPage from './components/EmployerSignupPage';
import EmployerDashboardPage from './components/EmployerDashboardPage';
import EditStudentAcctPage from './components/EditStudentAcctPage';
import JobPostedPage from './components/JobPostedPage';
import EmpCreatePostPage from './components/EmpCreatePostPage';
import EmpEditPostPage from './components/EmpEditPostPage';
import EditEmployerAcctPage from './components/EditEmployerAcctPage';
import Footer from './components/Footer';
import DashStudentPage from './components/DashStudentPage';
import Header from './components/Header';

// test imports

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>

          <Header />

          <LoginPage />

          <DashStudentPage />

          <Footer />

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
