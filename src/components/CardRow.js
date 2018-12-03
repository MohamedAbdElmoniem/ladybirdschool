import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import Zoom from 'react-reveal/Zoom';

const styles = {
    "rowMargin": {
        margin: 0
    },
    cardShadow: {
        "box-shadow": "0px 4px 8px 0px rgba(0,0,0,0.2)",
        "background-color": "aliceblue"
    },
    editColumn: {
        "width": "100px",
        "height": "100px"
    },
    fontColor: {
        'color': '#0b85a9',
        'line-height': '28px',
        'font-size': '17px'
    }
};

class CardRow extends Component {

    render() {

        const { classes } = this.props;

        return (

            <Row className={classes.rowMargin}>
                {this.props.cardRowDataArray && this.props.cardRowDataArray.map((content, index) => {
                    return (
                        <Col sm={4}>
                            <Zoom>
                                <div>
                                    <Card className={classes.cardShadow}>
                                        <CardBody>
                                            <Row>
                                                <Col sm={8}><CardTitle><h3 className={classes.editTitle}>{content.title}</h3></CardTitle>
                                                </Col>
                                                <Col className={classes.editColumn} sm={4}>
                                                    <img width="100%" height="100%" src={require(`../containers/img/${content.id}.png`)} />
                                                </Col>
                                            </Row>
                                        </CardBody>
                                        <img width="100%" src={content.cardImageUrl} alt="ladybird school" />
                                        <CardBody>
                                            <CardText><h5 className={classes.fontColor}>{content.desc}</h5></CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Zoom>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default withStyles(styles)(CardRow);