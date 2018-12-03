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
  Nav, Button,
  NavItem
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
    "font-size":"14px",
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
      collapsed: false
    };
    this.url = "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1mSfk0bG2Gy.mp3";
    this.audio = new Audio(this.url);
    this.audio.play();
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

    return (
      <div>
        <Navbar color="light" light expand="md">
          <img width="30%" src={require('./img/logo.png')} alt="ladybird school" />
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline color={'info'} className={classes.button}><Link to='/gallery' className={classes.anchor} ><h6 className={classes.anchor}>Gallery</h6></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'info'} className={classes.button}><Link to='/methodology' className={classes.anchor}><h6 className={classes.anchor}>Methodology</h6></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'info'} className={classes.button}><Link to='/admission' className={classes.anchor}><h6 className={classes.anchor}>Admission</h6></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'info'} className={classes.button}><Link to='/aboutus' className={classes.anchor}><h6 className={classes.anchor}>About us</h6></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'info'} className={classes.button}><Link to='/safetyandsecurity' className={classes.anchor}><h6 className={classes.anchor}>safety & security</h6></Link></Button>
              </NavItem>
              <NavItem>
                <Button outline color={'info'} className={classes.button}><Link to='/health' className={classes.anchor}><h6 className={classes.anchor}>Health</h6></Link></Button>
              </NavItem>
              <NavItem>
              <Button outline color={'info'} className={classes.button}><Link to='/health' className={classes.anchor}><h6 className={classes.anchor}>Health</h6></Link></Button>
            </NavItem>
            <NavItem>
            <Button outline color={'info'} className={classes.button}><Link to='/health' className={classes.anchor}><h6 className={classes.anchor}>Videos</h6></Link></Button>
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
