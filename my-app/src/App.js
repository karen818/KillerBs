import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
      {/* below is where theme was changed */}
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

          {/* <Header />

          <LoginPage />

          <EmployerDashboardPage />

          <DashStudentPage />

          <Footer /> */}
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/studentLogIn">Student Login</Link></li>
          </ul>
       </nav>

       <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/studentLogIn" component={DashStudentPage}/>
      </Switch>


        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
