import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { PagesContentServices } from '../services/PagesContentServices'
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from 'react-loading-skeleton';

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    tabContainer: {
        'background-color': 'gray'
    },
    tabItem: {
        'background-color': "orange",
        'border': '0.5px solid black'
    }
};

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class MethodologyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            content: []
        }
    }

    componentDidMount() {
        PagesContentServices.getMethodologyPageContent().then((response) => {
            debugger
            this.setState({ content: response.data.content })
        })
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };


    render() {
        const { classes } = this.props;
        debugger
        return (
            <Grid container spacing={24}>
                <Grid item xs={1}></Grid>
                <Grid item xs>
                    {this.state.content.length > 0 ? (<div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                fullWidth
                            >
                                <Tab className={classes.tabItem} label={this.state.content[0].title} />
                                <Tab className={classes.tabItem} label={this.state.content[1].title} />
                                <Tab className={classes.tabItem} label={this.state.content[2].title} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            className={classes.tabContainer}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer>{this.state.content[0].desc}</TabContainer>
                            <TabContainer>{this.state.content[1].desc}</TabContainer>
                            <TabContainer>Item Three</TabContainer>
                        </SwipeableViews>
                    </div>) : <Skeleton count={10} height={20} />}
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        )
    }
}
MethodologyPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MethodologyPage);
