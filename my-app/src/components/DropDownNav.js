import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import FontIcon from 'material-ui/FontIcon';
//import IconLocationOn from 'material-ui/svg-icons/communication/location-on'; IS THIS IMPORTANT?

const menuIcon = <FontIcon className="material-icons">menu</FontIcon>

export default class DropDownNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => this.setState({ open: false });

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <RaisedButton
          icon={menuIcon}
          label="Navigation"
          onClick={this.handleToggle}
          labelStyle={{textTransform: "none"}} // cool find!
        />
        <Drawer 
          width={300} 
          open={this.state.open} 
          onRequestChange={(open) => this.setState({ open })}  
          docked={false}
        >
          <AppBar
            title="Navigation"
            iconElementLeft=
            {
              <IconButton>
                <NavigationClose onClick={this.handleClose} />
              </IconButton>
            }
          />
          <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>About</MenuItem>
          <MenuItem onClick={this.handleClose}>FAQ</MenuItem>
          <MenuItem onClick={this.handleClose}>|potential different track|</MenuItem>
        </Drawer>
      </div>
    );
  }
}