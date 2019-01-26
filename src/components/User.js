import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authorizeUser } from "../actions/authorizeUser"

class User extends Component {

  handleUserClick = (evt) => {
    evt.preventDefault()

    const {dispatch, user} = this.props

    dispatch(authorizeUser(user))
  }

  render() {
    const { user } = this.props

    return (
      <div className="user-container" onClick={this.handleUserClick}>
        <div className="user-name">{user.name}</div>
      </div>
    )
  }
}

function mapStateToProps({dispatch}) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps)(User)
