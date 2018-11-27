import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CardMedia from '@material-ui/core/CardMedia';
import { PagesContentServices } from "../services/PagesContentServices";
import * as _ from 'lodash'
import CardRow from "../components/CardRow";
import Skeleton from 'react-loading-skeleton';
import { Row,Col ,Jumbotron} from "reactstrap";

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
        {this.state.homeContent.length > 0 ? this.state.homeContent.map((cardRowDataArray, index) => {
          return (
            [<CardRow cardRowDataArray={cardRowDataArray} />, <br />]
          )
        }) : <Skeleton count={10} height={20} />
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
