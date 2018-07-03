import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Post from "./post.js";

import request from 'superagent'

class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  componentDidMount() {
    request.get('/posts').set('Content-Type', 'application/json').send({}).end( (err, res) => {

      const posts = res.body.reduce( (acc, post) => {
        acc.push({name: post.name, comment: post.comment});
        return acc;
      }, []);
      posts
      this.setState({posts: posts});
    });

  }

  render() {
    const {classes} = this.props
    return(
      <div classname={classes.root} style={{maxHeight: window.innerHeight*0.5, overflow: 'auto'}}>
      <List component="nav">
      { this.state.posts.map( (post) => {
          return(
            <Post name={post.name} comment={post.comment} />
          );
        })}
      </List>
      </div>
    )
  }

}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

PostList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostList);
