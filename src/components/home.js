import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    return (
      <div className="container-fluid">
        Home
      </div>
    )
  }

}


// function mapStateToProps(state) {
//   let stateEmail = state.auth.signedInEmail ? state.auth.signedInEmail : localStorage.getItem('email')
//   return {
//     email: stateEmail,
//     user: state.auth.user
//   };
// }

export default connect()(Home)
