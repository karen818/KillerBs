import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableStyle = {
  width: 1050,
  margin: 'auto',
  marginTop: 30
};
const table = {
  width: '100%'
};
const style = {
  margin: 12,
  width: 800
};

// caleb added this const
  const styles = {
    button: {
      margin: 12,
    },
    exampleImageInput: {
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      opacity: 0,
    },
  };

class DashStudentPage extends React.Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };




  render () {
    return (
    <div>
      <div>
        <h1>DashStudentPage.js</h1>
        <p>Search:
          <TextField style={style}
            hintText="FIND A JOB"
          />
        </p>
      </div>
        <div style={table}>
        <Table style={tableStyle} onRowSelection={this.handleRowSelection}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow selected={this.isSelected(0)}>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>Job 1</TableRowColumn>
              <TableRowColumn>Apple</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(1)}>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Job 2</TableRowColumn>
              <TableRowColumn>Google</TableRowColumn>
            </TableRow>
            <TableRow selected={this.isSelected(2)}>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Job 3</TableRowColumn>
              <TableRowColumn>Facebook</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <RaisedButton
      label="Choose an Image"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
      </div>
      {/* editButton() */}
    </div>
    );
  }
}

export default DashStudentPage;
