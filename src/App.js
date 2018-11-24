import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutUsPage from "./containers/AboutUsPage";
import GalleryPage from "./containers/GalleryPage";
import MethodologyPage from "./containers/MethodologyPage";
import NavBar from "./containers/NavBar";
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class MenuAppBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <NavBar></NavBar>
          <Route path="/" exact component={HomePage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/methodology" component={MethodologyPage} />
        </div>
      </Router>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
