import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MetricList extends Component {




  render () {
    console.log('metrics', this.props)
    return (
      <div className="container-fluid">
        <h2>Metrics</h2>
      </div>
    )
  }


}
function mapStateToProps(state) {
  return {
    metrics: state.metrics
  }
}

// export default connect(mapStateToProps, actions)(Feature)
export default connect(mapStateToProps)(MetricList)
