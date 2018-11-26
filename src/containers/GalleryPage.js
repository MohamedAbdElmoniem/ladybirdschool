import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Gallery from 'react-grid-gallery';

const IMAGES =
    [{
        src: "https://i.lensdump.com/i/Aq80T1.png",
        thumbnail: "https://i.lensdump.com/i/Aq80T1.png",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://i.lensdump.com/i/Aq8Wex.jpg",
        thumbnail: "https://i.lensdump.com/i/Aq8Wex.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]

const styles = {
    root: {
        flexGrow: 1,
        'margin-top': 20
    },
    grow: {
        flexGrow: 1,
    },
    addMargin: {
        'margin-top': 20
    }
};

class GalleryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }


    render() {
        const { classes } = this.props;

        return (<div>
            <Grid container spacing={24}>
                <Grid item xs={2}></Grid>
                <Grid item xs className={classes.addMargin}>
                    <Gallery images={IMAGES} />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
        );
    }
}

GalleryPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GalleryPage);
