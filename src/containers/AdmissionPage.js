import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from "@material-ui/core";
import { PagesContentServices } from "../services/PagesContentServices";

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

        return (
            <div>
                {this.state.content.length > 0 ? <Grid container spacing={24}>
                    <Grid item xs={1} >
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.root} elevation={1}>
                            <Typography variant="h5" component="h3">
                                {this.state.content[0].title}
                            </Typography>
                            <Typography component="p">
                                {this.state.content[0].desc.map((value, index) => {
                                    return <h4 key={index}>{value}</h4>
                                })}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid xs={3} item >  <Paper className={classes.root} elevation={1}>
                        <Typography variant="h5" component="h3">
                            {this.state.content[1].title}
                        </Typography>
                        <Typography component="p">
                            {this.state.content[1].desc.map((value, index) => {
                                return <h4 key={index}>{value}</h4>
                            })}
                        </Typography>
                    </Paper></Grid>
                    <Grid xs={1} item></Grid>
                </Grid> : null}
            </div>
        )
    }
}
AdmissionPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdmissionPage);
