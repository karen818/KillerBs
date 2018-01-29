import React from 'react';
import AppBar from 'material-ui/AppBar';

// in order to pick what we like best, comment in and out ToolbarGroup or DropDownMenu in DropDownNav.js 
import DropDownNav from './DropDownNav';
import RightDropDownNav from './RightDropDownNav';

// Another stateless, functional component, MyAppBar. 
// Here we are setting the iconElementRight property of Material UI's AppBar
// to the component defined above.

const Header = () => (
  <AppBar
    title="JobFinderApp"
    iconElementLeft={<DropDownNav />}
    iconElementRight={<RightDropDownNav />}
  />
);

export default Header;


