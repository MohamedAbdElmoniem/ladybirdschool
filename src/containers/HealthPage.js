import React, { Component } from 'react'
import { PagesContentServices } from "../services/PagesContentServices";
import Skeleton from 'react-loading-skeleton';
import { Col, Row, Card, CardBody, CardHeader, Container } from "reactstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { calendarFormat } from 'moment';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: 15,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 400
    },
    "colorTitle":{
        'color':'#cf260f',
        'text-align':'center'
    }
});
class HealthPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentData: undefined
        }
    }

    componentDidMount() {
        PagesContentServices.getHealthPageContent().then((response) => {
            this.setState({ currentData: response.data })
        })
    }

    render() {

        const { classes } = this.props;
        const { currentData } = this.state;
        return (
            <div>
                {currentData && currentData.content.length > 0 ? (
                    <Container>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={8}>
                                <Card>
                                    <CardHeader>
                                        <h4 className={classes.colorTitle}>Health And Nutrition</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {currentData.content[0].content}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={8}><img width="100%" src={currentData.content[0].tableImg} alt="ladybird school" /></Col>
                            <Col sm={2}></Col>
                        </Row>
                        <br/>
                        <Row>
                            {currentData.content.map((val, index) => {
                                if (index !== 0) {
                                    return (
                                        <Col sm={6}>
                                            <Card>
                                                <CardHeader><h4 className={classes.colorTitle}>{val.title}</h4></CardHeader>
                                                <CardBody>{val.content}</CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
                                return null
                            })}
                        </Row>
                    </Container>
                )
                    : <Skeleton count={20} height={20} />
                }
            </div>
        )
    }
}

HealthPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HealthPage);
