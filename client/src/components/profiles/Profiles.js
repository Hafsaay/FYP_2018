import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { Link } from "react-router-dom";
import { getProfiles, getProfileBySearch } from "../../actions/profileActions";
// import filter from "js-filter";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
    // this.props.getProfileBySearch();
    if (this.props.match.params.search) {
      this.props.getProfileBySearch(this.props.match.params.search);
    }
  }
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        if (Object.keys(profiles).length > 0) {
          profileItems = (
            <div>
              <p className="lead text-muted">
                <Link to={`/profile/${profiles.search}`} />
              </p>
            </div>
          );
        }
      }
    }
    // let filteredProfiles = this.props.profiles.filter(profile => {
    //   return profile.name.indexOf(this.state.search) !== -1;
    // });

    return (
      <div className="row">
        <div className="col-md-9">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          <div className="col-md-3">
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>{" "}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Alumni Profiles</h1>
              <p className="lead text-center">Browse and connect with Alumni</p>
              {profileItems}
            </div>
            {/* <div>
              <ul>
                {filteredProfiles.map(profile => {
                  return <profile profile={profile} key={profile._id} />;
                })}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  getProfileBySearch: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles, getProfileBySearch }
)(Profiles);
