import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MetricList extends Component {
  render () {
    return (
      <div className="container-fluid">
        <h2>Metrics</h2>
      </div>
    )
  }


}
// function mapStateToProps(state) {
//   let stateEmail = state.auth.signedInEmail ? state.auth.signedInEmail : localStorage.getItem('email')
//   return {
//     email: stateEmail,
//     user: state.auth.user
//   }
// }

// export default connect(mapStateToProps, actions)(Feature)
export default connect()(MetricList)
