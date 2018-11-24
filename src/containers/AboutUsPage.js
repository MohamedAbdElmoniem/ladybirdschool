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

const styles = {
  root: {
    flexGrow: 1,
    'margin-top': 20
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
  heading: {
    fontSize: 15,
    fontWeight: "bold"
  },
  textP: {
    margin: 20,
    fontSize: 17
  }
};

class AboutUsPage extends Component {
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
        <Grid item xs>
          <div>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h3" align='center'>
                ABOUT US
          </Typography>
              <Typography component="p" align='center' paragraph className={classes.textP}>
                Ladybird is a play-based year-round daycare in Cairo that offers outstanding care and facilities for children aged 1 to 4, with an emphasis on full character development. Ladybird has been on grounds since 1999. We work on nurturing the 5 main areas of development; social/ emotional/ cognitive/ physical/ language and creativity aspects. Its safe to say that at Ladybird, we have a passion for excellence. Backed up by the experience of years, we have put together morals, academic content & loads of fun to come up with our own custom curriculum and methodology that assures the smoothest preparation for a child’s future.
                Ladybird is safe and cosy and will definitely make your child feel at home.
 </Typography>
            </Paper>
            <Paper className={classes.root} elevation={1}>

              <Typography component="p" align='center' paragraph className={classes.textP}>
                Come visit us for a tour, everyday form 10:00 am – 11:30 am Age of acceptance: 1- 4 years
                Working hours: 08:00 am -04:30 pm
                Extra hours from 07:30 am -5:30 pm
                                    </Typography>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={2}></Grid>
        <Grid item xs>
          <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Mission</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Our mission is to provide high quality education and childcare in an inclusive, safe, and stimulating environment that maximizes individual potential and ensure abilities are well equipped and ready for life-long learning.
        </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Vision</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Our vision is to raise bright, independent-thinking children through appropriate role modeling. We aim to teach children how to think and get them engaged in meaningful learning activities as they develop to their fullest potential. Our program is planned to promote social, physical, emotional and intellectual abilities to set them off ready at the brinks of their coming milestone.
        </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

    </div>
    );
  }
}

AboutUsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsPage);
