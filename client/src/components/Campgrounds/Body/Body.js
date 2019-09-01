import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className={classes.thumbnail}>
          <img className={classes.img} alt="" src={this.props.obj.image} />
          <div className={classes.caption}>
            <h4>{this.props.obj.name}</h4>
          </div>
          <p>
            <Link
              to={'/campgrounds/' + this.props.obj._id}
              className="btn btn-primary"
            >
              More Info
            </Link>
            {/* <button onClick={this.delete} className="btn btn-danger">
              Delete
            </button> */}
          </p>
          {/* <p>
          </p> */}
        </div>
      </div>
    );
  }
}

export default Body;
