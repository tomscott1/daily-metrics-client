import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'
import _ from 'lodash'

class AddMetric extends Component {
  render() {
    return (
      <div className="container-fluid">
      Add new metric
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return { errorMessage: state.addmetric.error };
// }

export default reduxForm({
  form: 'addmetric',
  fields: ['metric_type', 'title']
}, null, actions)(AddMetric);
