import React from "react";
import { reduxForm, Field } from "redux-form";
import { apiResults, fetchApi } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SearchBar extends React.Component {
  inputCreate = ({ input, label, type }) => {
    return (
      <label>
        {label}
        <input type={type} {...input} />
      </label>
    );
  };
  onSubmit = formValues => {
    this.props.fetchApi(formValues);
  };
  formCreate = () => {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="flex-direction">
            <div className="form-element">
              <label>
                Nationality
                <Field name="nationality" component="select">
                  <option>Please Select</option>
                  <option value="AU">Australia</option>
                  <option value="BR">Brazil</option>
                  <option value="CA">Canada</option>
                  <option value="DK">Denmark</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="NL">Holland</option>
                  <option value="IR">Iran</option>
                  <option value="IE">Ireland</option>
                  <option value="NZ">New Zealand</option>
                  <option value="ES">Spain</option>
                  <option value="CH">Switzerland</option>
                  <option value="TR">Turkey</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                </Field>
              </label>
              <Field
                name="count"
                type="number"
                component={this.inputCreate}
                label="Result Number"
              />
              <div className="radio">
                <Field
                  name="gender"
                  type="radio"
                  component={this.inputCreate}
                  label="Female"
                  value="female"
                />
                <Field
                  name="gender"
                  type="radio"
                  component={this.inputCreate}
                  label="Male"
                  value="male"
                />
              </div>
            </div>
            <div className="button">
              <button>Search</button>
            </div>
          </div>
        </form>
        {this.props.redirectStatus && <Redirect to="/profilelist" />}
      </div>
    );
  };

  render() {
    return <div className="form">{this.formCreate()}</div>;
  }
}
const mapStateToProps = state => {
  return { redirectStatus: state.redirectStatus };
};
export default connect(
  mapStateToProps,
  { apiResults, fetchApi }
)(
  reduxForm({
    form: "searchBar"
  })(SearchBar)
);