import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardMedia from '@material-ui/core/CardMedia';
import { PagesContentServices } from "../services/PagesContentServices";
import * as _ from 'lodash'
import CardRow from "../components/CardRow";
import ReactLoading from 'react-loading';

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
  card: {
    maxWidth: 370,
    'margin-left': 50
  },
  homeImage: {
    'margin-top': 15,
    maxWidth: 700
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeContent: []
    };
  }

  componentDidMount() {
    PagesContentServices.getHomeContent().then(response => {
      this.setState({ homeContent: _.chunk(response.data.content, 3) })
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}></Grid>
          <Grid item xs={8}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.homeImage}
              height="250"
              image="https://i.lensdump.com/i/Aq80T1.png"
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        {this.state.homeContent ? this.state.homeContent.map((cardRowDataArray, index) => {
          return (
            <CardRow cardRowDataArray={cardRowDataArray} />
          )
        }) : <ReactLoading type={"spin"} color={"black"} height={'100%'} width={'100%'} />
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
