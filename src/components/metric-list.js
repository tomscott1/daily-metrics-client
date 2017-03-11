import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../actions'
import _ from 'lodash'

class MetricList extends Component {

  componentWillMount() {
    // return
  }

  createMetricsList(metric) {
    return (
        <li className="list-group-item" key={metric._id}>{metric.title}</li>
    )

  }

  render () {
    if(!this.props.metrics || !this.props.metrics.list) return (
      <div className="container-fluid">
        No metrics loaded
        <div>
          <Link to="/addmetric" className="btn btn-default">Add Metric</Link>
        </div>
      </div>
    )
    return (
      <div className="container-fluid">
        <h2>Metrics</h2>
        <div>
          <ul className="list-group">
          {this.props.metrics.map(this.createMetricsList)}
          </ul>
        </div>
      </div>
    )
  }


}
function mapStateToProps(state) {
  return {
    metrics: state.metrics.list
  }
}

export default connect(mapStateToProps)(MetricList)
