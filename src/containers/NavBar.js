import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

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
    margin: 10,
    'background-color': 'orange',
    'margin-top': 17,
    "&:hover": {
      'background-color': 'orange'
    }
  }
};

class NavBarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: true,
      anchorEl: null,
    };
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
      <AppBar position="static" className={classes.bgColor}>
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={3.5}>
              <h2>ladybird pre-school</h2>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item xs={9}>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/'>Home</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/aboutus'>about us</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/gallery'>Gallery</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/methodology'>Methodology</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/aboutus'>Admission</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/aboutus'>Health & safety</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/aboutus'>programs & events</Link>
              </Button>
              <Button size='small' variant="contained" color='primary' className={classes.button}>
                <Link to='/aboutus'>PARENTS AS PARTNERS</Link>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarComponent);
