import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProfilePage = props => {
  const renderProfile = () => {
    if (props.state) {
      return (
        <div className="info">
          <img src={props.state.picture.large} alt={props.state.name.first} />
          <div className="text">
            <p>Name: {props.state.name.first + " " + props.state.name.last}</p>
            <p>
              Email: <span className="email">{props.state.email}</span>
            </p>
            <p>City: {props.state.location.city}</p>
            <p>Phone: {props.state.phone}</p>
          </div>
        </div>
      );
    }
    return <div>Please select a user to see a profile</div>;
  };

  return (
    <div className="profile-page">
      Profile Page
      {renderProfile()}
      <Link to="/">Return to homepage</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { state: state.selectedProfile };
};
export default connect(mapStateToProps)(ProfilePage);
