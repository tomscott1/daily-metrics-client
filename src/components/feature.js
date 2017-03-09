import React, { Component } from 'react'
import { connect } from 'react-redux'
import MetricList from './metric-list'
import * as actions from '../actions'
import _ from 'lodash'

class Feature extends Component {
  componentWillMount() {
    this.props.getUserInfo(this.props)
    console.log('props', this.props)
  }

  getMetricList() {
    console.log('metrics props', this.props)
    this.props.getMetrics(this.props.user)
  }

  renderUserName(){
    if (this.props.user) {
      if (this.props.user.first_name) return `, ${this.props.user.first_name}`
      return `, ${this.props.user.email}`
    }
    return
  }

  render() {
    return (
      <div className="container-fluid">
        Welcome{this.renderUserName()}
        <button className="btn btn-default" onClick={this.getMetricList.bind(this)}>Load Metrics</button>
        <MetricList />
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
