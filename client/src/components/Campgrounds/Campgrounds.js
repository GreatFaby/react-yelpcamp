import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Body from './Body/Body';

class Campgrounds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campground: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/campgrounds')
      .then(response => {
        this.setState({ campground: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.campground.map(function(object, i) {
      return <Body obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <div className="container">
            <h1>Welcome To YelpCamp</h1>
            <p>View our hand picked campgrounds from all over the world</p>
            <p>
              <Link className="btn btn-primary btn-lg" to="/campgrounds/new">
                Add New Campground
              </Link>
            </p>
          </div>
        </header>

        <h3 className="text-center">Campgrounds</h3>
        <div
          className="row text-center"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {this.tabRow()}
        </div>
      </div>
    );
  }
}

export default Campgrounds;
