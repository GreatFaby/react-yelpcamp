import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import classes from './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirect: false,
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post('http://localhost:4000/users', data)
      .then(response => {
        if (response.data) {
          // sessionStorage.setItem('data', response);
          localStorage.setItem('token', response.data.token);
          this.setState({ redirect: true });
        } else {
          console.log('Login Error');
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/campgrounds'} />;
    }

    if (sessionStorage.getItem('data')) {
      return <Redirect to={'/campgrounds'} />;
    }

    return (
      <div className={classes.Register}>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
