import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectedProfile } from "../actions";

const ProfileList = props => {
  if (props.fetchedResults.length > 0) {
    return (
      <div className="results">
        {props.fetchedResults.map(result => {
          return (
            <div key={result.picture.thumbnail} className="profile-result">
              <img src={result.picture.large} alt={result.name.first} />
              <p>
                <span className="name">{`${result.name.first} ${
                  result.name.last
                }`}</span>
              </p>
              <p>{result.location.city}</p>
              <Link
                to="/profilepage"
                onClick={() => props.selectedProfile(result)}
              >
                See the profile
              </Link>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="container">Please search to see profiles</div>;
  }
};
const mapStateToProps = state => {
  return { fetchedResults: state.fetchedResults };
};
export default connect(
  mapStateToProps,
  { selectedProfile }
)(ProfileList);
