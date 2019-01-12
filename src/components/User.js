import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

  render() {
    const { user } = this.props

    return (
      <div>User</div>
    )
  }
}

export default User
