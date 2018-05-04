import React, { Component } from 'react';
import './style.css';

const Login = (props) => {
    return (
      <div>
        <h5>Username</h5>
        <input type='text' onKeyPress={props.updateUsername}/>
      </div>
      )
}

export default Login;
