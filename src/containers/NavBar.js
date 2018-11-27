import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  bgColor: {
    backgroundColor: "green"
  },
  button: {
    margin: 10
  },
  gridMargin: {
    marginTop: 38,
    marginLeft: 10
  },
  anchor: {
    'text-decoration': 'none',
    'color': 'green',
    "&:hover": {
      'text-decoration': 'none',
      'color': 'white'
    }
  }
};

class NavBarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: true,
      anchorEl: null,
      collapsed: false

    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Navbar color="light" light expand="md">
          <img width="30%" src={require('./img/logo.png')} />
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <Button outline color={'success'} className={classes.button}><Link to='/gallery' className={classes.anchor} ><h4 className={classes.anchor}>Gallery</h4></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'success'} className={classes.button}><Link to='/methodology' className={classes.anchor}><h4 className={classes.anchor}>Methodology</h4></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'success'} className={classes.button}><Link to='/admission' className={classes.anchor}><h4 className={classes.anchor}>Admission</h4></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'success'} className={classes.button}><Link to='/aboutus' className={classes.anchor}><h4 className={classes.anchor}>About us</h4></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'success'} className={classes.button}><Link to='/' className={classes.anchor}><h4 className={classes.anchor}>Home</h4></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'success'} className={classes.button}><Link to='/' className={classes.anchor}><h4 className={classes.anchor}>Home</h4></Link></Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}

NavBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarComponent);
