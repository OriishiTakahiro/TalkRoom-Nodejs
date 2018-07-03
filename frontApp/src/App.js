import React, { Component } from 'react';
import logo from './logo.svg';
import InputField from './components/input_fields.js';
import PostList from './components/post_list.js';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
  render() {
    const theme = createMuiTheme();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Talkroom</h1>
        </header>
      <MuiThemeProvider theme={theme}>
      <PostList />
      <InputField />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
