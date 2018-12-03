import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { PagesContentServices } from "../services/PagesContentServices";
import * as _ from 'lodash'
import CardRow from "../components/CardRow";
import Skeleton from 'react-loading-skeleton';
import {
  Container, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Col, Row
} from "reactstrap";

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
  formatImages: {
    'height': '350px'
  }
};

const items = [
  {
    "src": "https://i.lensdump.com/i/ApBB5q.jpg",
    "caption": "ladybird school"
  },
  {
    "src": "https://i.lensdump.com/i/Apqu80.jpg",
    "caption": "ladybird school"
  },
  {
    "src": "https://i.lensdump.com/i/Apqwmk.jpg",
    "caption": "ladybird school"
  },
  {
    "src": "https://i.lensdump.com/i/ApBgA2.jpg",
    "caption": "ladybird school"
  },
  {
    "src": "https://i.lensdump.com/i/ApsDQ2.jpg",
    "caption": "ladybird school"
  },
  {
    "src": "https://i.lensdump.com/i/ApshyD.jpg",
    "caption": "ladybird school"
  }
]

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeContent: [],
      activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    PagesContentServices.getHomeContent().then(response => {
      this.setState({ homeContent: _.chunk(response.data.content, 3) })
    })
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { classes } = this.props;
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className={classes.formatImages}
        >
          <img height="100%" width="100%" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Container>
        <Row>
          <Col sm={0}></Col>
          <Col sm={12} className={classes.formatImages}
          >
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </Col>
          <Col sm={0}></Col>
        </Row>
        <br />
        {this.state.homeContent.length > 0 ? this.state.homeContent.map((cardRowDataArray, index) => {
          return (
            [<CardRow cardRowDataArray={cardRowDataArray} />, <br />]
          )
        }) : <Skeleton count={15} height={20} />
        }
      </Container>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
