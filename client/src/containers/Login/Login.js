import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import classes from './Login.css';

class Login extends Component {
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
      .post('http://localhost:4000/users/login', data)
      .then(response => {
        console.log(response);
        if (response.data) {
          sessionStorage.setItem('data', response);
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
      <div className={classes.Login}>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-group"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-group"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
