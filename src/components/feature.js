import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash'

class Feature extends Component {
  componentWillMount() {
    this.props.getUserInfo(this.props)
    console.log('props', this.props)
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
      <div>Welcome{this.renderUserName()}</div>
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
