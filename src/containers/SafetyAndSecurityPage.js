import React, { Component } from 'react'
import { PagesContentServices } from "../services/PagesContentServices";
import Skeleton from 'react-loading-skeleton';
import { Col, Row, Card, CardBody, CardHeader, Container } from "reactstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getImagePaths } from "../services/ImagePaths";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        marginTop: 15,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 400
    },
    "colorTitle": {
        'color': '#cf260f',
        'text-align': 'center'
    },
    editCol: {
        "width": "160px",
        "height": '160px',
        paddingLeft:20
    },
    cardHeaderColor:{
        'background-color': '#ffd700a1'
    }
   
});
class SafetyAndSecurityPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentData: undefined,
            ImagePaths: undefined
        }
    }

    componentDidMount() {
        getImagePaths().then((response) => {
            this.setState({ ImagePaths: response.data.imagePaths })
        })
        PagesContentServices.getSafetyAndSecurityPageContent().then((response) => {
            this.setState({ currentData: response.data })
        })
    }

    render() {

        const { classes } = this.props;
        const { currentData } = this.state;
        return (
            <Container>
                {this.state.ImagePaths ? <Row>
                    <Col md={3} className={classes.editCol}>
                        <img class="rounded-circle" src={this.state.ImagePaths[0]} alt="Generic placeholder image" width="70%" height="100%"></img>
                    </Col>
                    <Col md={3} className={classes.editCol}>
                        <img class="rounded-circle" src={this.state.ImagePaths[1]} alt="Generic placeholder image" width="70%" height="100%"></img>
                    </Col>
                    <Col md={3} className={classes.editCol}>
                        <img class="rounded-circle" src={this.state.ImagePaths[2]} alt="Generic placeholder image" width="70%" height="100%"></img>
                    </Col>
                    <Col md={3} className={classes.editCol}>
                        <img class="rounded-circle" src={this.state.ImagePaths[3]} alt="Generic placeholder image" width="70%" height="100%"></img>
                    </Col>
                </Row> : null}
                <br />
                {currentData && currentData.content.length > 0 ? (
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Card>
                                <CardHeader className={classes.cardHeaderColor}>
                                    <h4 className={classes.colorTitle}>{currentData.pageName}</h4>
                                </CardHeader>
                                <CardBody>{currentData.content.map((val, index) => {
                                    return (<h6>{val}</h6>)
                                })}</CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                )
                    : <Skeleton count={20} height={20} />}
            </Container>
        )
    }
}

SafetyAndSecurityPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SafetyAndSecurityPage);
