import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { PagesContentServices } from "../services/PagesContentServices";
import Skeleton from 'react-loading-skeleton';
import { Col, Row, Card, CardBody, CardHeader, Container } from "reactstrap";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: 15,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 400
    },
});

class AdmissionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
    }

    componentDidMount() {
        PagesContentServices.getAdmissionPageContent().then(response => {
            this.setState({ content: response.data.content })
        })
    }

    render() {
        const { classes } = this.props;
        const { content } = this.state;
        return (
            <Container>
                {this.state.content.length > 0 ? (
                    <Row>
                        <Col sm={6}>
                            <Card>
                                <CardHeader>
                                    {content[0].title}
                                </CardHeader>
                                <CardBody>{content[0].desc}</CardBody>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <CardHeader>
                                    {content[1].title}
                                </CardHeader>
                                <CardBody>{content[1].desc.map((value, index) => {
                                    return <p>- {value}</p>
                                })}</CardBody>
                            </Card>
                        </Col>
                    </Row>
                )
                    : <Skeleton count={10} height={20} />}
            </Container>
        )
    }
}
AdmissionPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdmissionPage);
