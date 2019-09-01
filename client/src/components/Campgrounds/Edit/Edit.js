import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import classes from './Edit.css';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      price: '',
      image: '',
      description: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/campgrounds/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          price: response.data.price,
          image: response.data.image,
          description: response.data.description,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handlePriceChange(e) {
    this.setState({
      price: e.target.value,
    });
  }
  handleImageChange(e) {
    this.setState({
      image: e.target.value,
    });
  }
  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      price: this.state.price,
      image: this.state.image,
      description: this.state.description,
    };

    const token = localStorage.getItem('token');

    axios
      .patch(
        'http://localhost:4000/campgrounds/' + this.props.match.params.id,
        obj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        this.props.history.push('/campgrounds/' + this.props.match.params.id)
      );
    // (res => console.log(res.data))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/campgrounds'} />;
    }
    return (
      <div className={classes.Edit}>
        <h1 style={{ textAlign: 'center' }}>Edit Campground</h1>
        <div style={{ width: '60%', margin: '25px auto' }}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="price"
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="image"
                value={this.state.image}
                onChange={this.handleImageChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Update Campground"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
