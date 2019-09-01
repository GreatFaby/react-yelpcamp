import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import classes from './Table.css';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);

    this.state = {
      redirect: false,
    };
  }
  delete() {
    const token = localStorage.getItem('token');

    axios
      .delete('http://localhost:4000/campgrounds/' + this.props.obj._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        this.setState({ redirect: true });
      })
      // .then(console.log('Deleted'))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/campgrounds'} />;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="thumbnail">
              <img
                style={{ width: '100%' }}
                alt=""
                className="img-responsive"
                src={this.props.obj.image}
              />
              <div className="caption-full">
                <h5 className="pull-right">₦{this.props.obj.price} /Night</h5>
                <h3 className="font-italic">{this.props.obj.name}</h3>
                <p className="font-weight-bolder">
                  {this.props.obj.description}
                </p>

                {/* {this.props.userId === this.props.obj.owner && ( */}
                <p>
                  <Link
                    style={{ marginRight: '10px' }}
                    to={'/campgrounds/' + this.props.obj._id + '/edit'}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <button onClick={this.delete} className="btn btn-danger">
                    Delete
                  </button>
                </p>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
