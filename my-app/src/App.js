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

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

         <Header />

         <nav className="navbar navbar-light">
           <ul className="nav navbar-nav">
             {/* <li><Link to="/">Login Page</Link></li> */}
             <li><Link to="/student-dash">Student Dash</Link></li>
             <li><Link to="/student-signup">Student Sign Up</Link></li>
             <li><Link to="/edit-student-acct">Edit Student Acct</Link></li>
             <li><Link to="/employer-dash">Employer Dash</Link></li>
             <li><Link to="/employer-signup">Employer Sign Up</Link></li>
             <li><Link to="/edit-employer-acct">Edit Employer Acct</Link></li>
             <li><Link to="/job-posted">Job Posting</Link></li>
             <li><Link to="/edit-job-post">Edit Job Post</Link></li>
           </ul>
         </nav>

         <Switch>
           <Route exact path="/" component={LoginPage} />
           <Route path="/student-dash" component={DashStudentPage} />
           <Route path="/student-signup" component={StudentSignupPage} />
           <Route path="/edit-student-acct" component={EditStudentAcctPage} />
           <Route path="/employer-dash" component={EmployerDashboardPage} />
           <Route path="/employer-signup" component={EmployerSignupPage} />
           <Route path="/edit-employer-acct" component={EditEmployerAcctPage} />
           <Route path="/job-posted" component={JobPostedPage} />
           <Route path="/edit-job-post" component={EmpEditPostPage} />
         </Switch>
         <Footer />

     </MuiThemeProvider>
   </div>
    );
  }
}

export default App;
