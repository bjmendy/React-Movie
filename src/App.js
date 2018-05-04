import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MovieContainer from './MovieContainer';


class App extends Component {
  constructor(){
    super();

    this.state = {
      isLogged: false,
      username: ''
    }
  }
  updateUsername = (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
      const username = e.target.value;
      this.setState({
        username: username,
        isLogged: true
      })
    }
  }
  render() {
    console.log(this.state, ' this is state')
    // Instead of using if else use a ternary Operator
    return (
      <div className="App">
        {this.state.isLogged ? <MovieContainer username={this.state.username}/> : <Login updateUsername={this.updateUsername}/>}
      </div>
    );
  }
}

export default App;
