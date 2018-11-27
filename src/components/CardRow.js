import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
const styles = {
    "rowMargin": {
        margin: 10
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
                            <div>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}><CardTitle> <h3>{content.title}</h3></CardTitle>
                                            </Col>
                                            <Col xs={1}></Col>
                                            <Col xs={3}>
                                                <img width="100%" height="100%" src={require(`../containers/img/${content.id}.png`)} />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <img width="100%" src={content.cardImageUrl} alt="ladybird school" />
                                    <CardBody>
                                        <CardText><h5>{content.desc}</h5></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default withStyles(styles)(CardRow);