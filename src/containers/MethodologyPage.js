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
import Zoom from "react-reveal/Zoom";
const styles = {
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    tabContainer: {
        'background-color': '#f8f9fa',
        'box-shadow': '0px 4px 8px 0px rgba(0,0,0,0.2)'
    },
    tabItem: {
        'background-color': "#b1d3f8",
        'border': '0.5px solid #f8f9fa'
    },
    tabBodyColor: {
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
        return (
            <div>
                
                    <Grid container spacing={24}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs>
                            {this.state.content.length > 0 ? (<Zoom><div className={classes.root}>

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
                                    <TabContainer className={classes.tabBodyColor}>{this.state.content[0].desc}</TabContainer>
                                    <TabContainer className={classes.tabBodyColor}>{this.state.content[1].desc}</TabContainer>
                                    <TabContainer className={classes.tabBodyColor}>Item Three</TabContainer>
                                </SwipeableViews>
                                
                            </div></Zoom>) : <Skeleton count={20} height={20} />}
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
               
            </div>
        )
    }
}
MethodologyPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MethodologyPage);
