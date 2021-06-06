import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };

  render() {
    const {
      hireable,
      avatar_url,
      name,
      location,
      bio,
      html_url,
      login,
      company,
      blog,
      followers,
      following,
      public_repos,
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-3">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>
              <strong>Location:</strong> {location}
            </p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
          </div>
          <div>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-dark">
            Followers:
            {followers}
          </div>

          <div className="badge badge-success">
            Followings:
            {following}
          </div>
          <div className="badge badge-danger">Public Repos: {public_repos}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;