import React, { Component } from 'react'
import { PagesContentServices } from "../services/PagesContentServices";
import Skeleton from 'react-loading-skeleton';
import { Col, Row, Card, CardBody, CardHeader, Container } from "reactstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: 15,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 400
    },
});
class SafetyAndSecurityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentData: undefined
        }
    }

    componentDidMount() {
        PagesContentServices.getSafetyAndSecurityPageContent().then((response) => {
            this.setState({ currentData: response.data })
        })
    }

    render() {

        const { classes } = this.props;
        const { currentData } = this.state;
        return (
            <Container>
                {currentData && currentData.content.length > 0 ? (
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col sm={2}></Col>
                                        <Col sm={9}>
                                        <h3>{currentData.pageName}</h3>                                        
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>{currentData.content.map((val, index) => {
                                    return (<h5>{val}</h5>)
                                })}</CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                )
                    : <Skeleton count={10} height={20} />}
            </Container>
        )
    }
}

SafetyAndSecurityPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SafetyAndSecurityPage);
