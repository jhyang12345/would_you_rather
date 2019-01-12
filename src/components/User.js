import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

  render() {
    const { user } = this.props

    return (
      <div className="user-container">
        <div className="user-name">{user.name}</div>
      </div>
    )
  }
}

export default User
