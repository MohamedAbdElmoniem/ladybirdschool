import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Gallery from 'react-grid-gallery';
import { getImagePaths } from "../services/ImagePaths";
import Skeleton from 'react-loading-skeleton';
import Zoom from 'react-reveal/Zoom';


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
            IMAGES: undefined
        };
    }
    componentDidMount() {
        getImagePaths().then((response) => {
            let finalImageGalleryCollection = response.data.imagePaths.map((v, i) => {
                return {
                    src: v, thumbnail: v, thumbnailWidth: 320,
                    thumbnailHeight: 212
                }
            })
            this.setState({ IMAGES: finalImageGalleryCollection })
        })
    }

    render() {
        const { classes } = this.props;

        return (<div>
            <Grid container spacing={24}>
                <Grid item xs={2}></Grid>
                <Grid item xs className={classes.addMargin}>
                    {this.state.IMAGES ? <Zoom><Gallery images={this.state.IMAGES} /></Zoom> : <Skeleton count={20} height={20} />}
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
