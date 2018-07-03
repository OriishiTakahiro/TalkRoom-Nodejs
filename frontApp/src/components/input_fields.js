import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

import request from 'superagent'


class InputField extends Component {

  constructor(props) {
    super(props)
    this.state = {name: "名無し-サン", comment: ""}
    this.changeNameTxt = this.changeNameTxt.bind(this);
    this.changeCommentTxt = this.changeCommentTxt.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    request.post('/posts/new').set('Content-Type', 'application/json').send({name: this.state.name, comment: this.state.comment.replace(/\n/g, '<br/>')}).end( (err, res) => { });
  }

  changeNameTxt(e) {
    this.setState({name: e.target.value});
  }
  changeCommentTxt(e) {
    this.setState({comment: e.target.value});
  }

  render() {
    const nameProps = { id: "name-input", defaultValue: "名無し-サン" }
    const commentProps = { id: "comment-input", placeholder: "こんにちは"};
    return (
      <div>
        <p>
          <TextField name="name" label="ハンドルネーム" onChange={this.changeNameTxt} inputProps={nameProps}/>
        </p>
        <p> 
          <TextField name="comment" label="コメント" onChange={this.changeCommentTxt} inputProps={commentProps} multiline fullwidth rows={5} />
        </p>
        <p> <Button variant="outlined" color="primary" onClick={this.clickHandler}> submit </Button> </p>
      </div>
    );
  }
}

export default InputField;
