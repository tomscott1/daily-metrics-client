import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import MetricList from './metric-list'
import * as actions from '../actions'
import _ from 'lodash'

class Feature extends Component {
  componentWillMount() {
    this.props.getUserInfo(this.props)
    if(this.props.user) localStorage.setItem('_id', this.props.user._id)
  }

  getMetricList() {
    if(this.props.user) {
      let user = { user: this.props.user._id }
      this.props.getMetrics(user)
    }
  }

  renderUserName(){
    if (this.props.user) {
      if (this.props.user.first_name) return `, ${this.props.user.first_name}`
      return `, ${this.props.user.email}`
    }
    return
  }

  render() {
    this.getMetricList()
    return (
      <div className="container-fluid">
        <div>
          Welcome{this.renderUserName()}
        </div>

        <div>
          <Link to="/metrics" className="btn btn-default">View Metrics</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  let stateEmail = state.auth.signedInEmail ? state.auth.signedInEmail : localStorage.getItem('email')
  return {
    email: stateEmail,
    user: state.auth.user
  };
}

export default connect(mapStateToProps, actions)(Feature);
