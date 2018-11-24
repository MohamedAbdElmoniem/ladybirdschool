import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

class AdmissionPage extends Component {

constructor(props) {
super(props);
this.state = {

}
}

render() {
const { classes } = this.props;

return (
<div>

</div>
)
}
}
AdmissionPage.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdmissionPage);
