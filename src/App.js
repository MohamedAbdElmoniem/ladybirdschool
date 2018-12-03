import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage";
import AboutUsPage from "./containers/AboutUsPage";
import GalleryPage from "./containers/GalleryPage";
import MethodologyPage from "./containers/MethodologyPage";
import AdmissionPage from "./containers/AdmissionPage";
import NavBar from "./containers/NavBar";
import Footer from "./containers/Footer";
import HealthPage from "./containers/HealthPage";
import SafetyAndSecurityPage from "./containers/SafetyAndSecurityPage";

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
        <div className={classes.root} id="body">
          <NavBar></NavBar>
          <br/>
          <Route path="/" exact component={HomePage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/methodology" component={MethodologyPage} />
          <Route path="/admission" component={AdmissionPage} />
          <Route path="/safetyandsecurity" component={SafetyAndSecurityPage} />
          <Route path="/health" component={HealthPage} />
          <br/>
          <br/>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
