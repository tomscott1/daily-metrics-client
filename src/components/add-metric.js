import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import _ from 'lodash'

class AddMetric extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { title, metric_type }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Title:</label>
          <input className="form-control" {...title} />
        </fieldset>
        <fieldset className="form-group">
          <label>Type:</label>
            <select className="form-control" {...metric_type}>
              <option>Yes/No</option>
              <option>1-10 Scale</option>
            </select>
        </fieldset>

        {this.renderAlert()}
        <button action="submit" className="btn btn-default">Register</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.title) {
    errors.email = 'Please enter a title for your metric'
  }

  if (!formProps.metric_type) {
    errors.password = 'Please choose a metric type'
  }

  return errors;
}




// function mapStateToProps(state) {
//   return { errorMessage: state.addmetric.error };
// }

export default reduxForm({
  form: 'addmetric',
  fields: ['metric_type', 'title']
}, null, actions)(AddMetric);
