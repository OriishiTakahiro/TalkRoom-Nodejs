import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = { name: props.name, comment: props.comment, expanded: null };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({expanded: expanded ? panel : false})
  }

  render() {
    const {classes} = this.props
    return (
      <div classname={classes.root}>
        <ExpansionPanel expanded={this.state.expanded==='panel'} onChange={this.handleChange('panel')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}> {this.state.name} </Typography>
          <Typography className={classes.secondaryHeading}> {this.state.comment} </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Typography>
          {this.state.comment}
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});


Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
