import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Landing.css';

const Landing = props => {
  return (
    <div className={classes.top}>
      <div>
        <h1>Welcome to YelpCamp!</h1>
        <Link className="btn btn-lg btn-success" to="/campgrounds">
          View All Campgrounds
        </Link>
      </div>
      {/*
      <button className={classes.top} onClick={this.logout}>
        logout
      </button> */}

      {/* <ul className={classes.slideshow}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </div>
  );
};

export default Landing;
