import React, { Component } from 'react'
import { Grid, CardActionArea, CardMedia, CardContent, Typography, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    bgColor: {
        backgroundColor: "green"
    },
    card: {
        maxWidth: 370,
        'margin-left': 50
    },
    homeImage: {
        'margin-top': 15,
        maxWidth: 700
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

class CardRow extends Component {

    render() {

        const { classes } = this.props;

        return (
            <Grid container spacing={24}>
                <Grid item xs={1}></Grid>
                {this.props.cardRowDataArray && this.props.cardRowDataArray.map((content, index) => {
                    return (
                        <Grid item xs={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        className={classes.media}
                                        height="140"
                                        image={content.cardImageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {content.title}
                                        </Typography>
                                        <Typography component="p">
                                            {content.desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}

export default withStyles(styles)(CardRow);