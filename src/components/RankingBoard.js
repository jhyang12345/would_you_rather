import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleReceiveUsers } from "../actions/users"
import "../css/RankingBoard.css"
import RankingUser from "./RankingUser"

class RankingBoard extends Component {

  componentDidMount() {
    handleReceiveUsers()
  }

  render() {
    const { users } = this.props
    console.log("Users", users)
    const userList = []

    for (let key in users) {
      userList.push(users[key])
    }

    return (
      <div className="ranking-container">
        {
          userList.map((user) => (
            <RankingUser />
          ))
        }
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default withRouter(connect(mapStateToProps)(RankingBoard))
