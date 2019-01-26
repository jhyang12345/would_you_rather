import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleReceiveUsers } from "../actions/users"
import "../css/RankingBoard.css"
import RankingUser from "./RankingUser"

class RankingBoard extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    // always dispatch action creator helpers~~
    dispatch(handleReceiveUsers())
  }

  getRankingStats = (user) => {
    const answeredQuestions = Object.keys(user.answers).length
    const createdQuestions = Object.keys(user.questions).length

    const total = answeredQuestions + createdQuestions

    return {
      answered: answeredQuestions,
      created: createdQuestions,
      total: total,
    }
  }

  sortRankingStats = (users) => {
    users.sort((a, b) => {
      const statsA = this.getRankingStats(a)
      const statsB = this.getRankingStats(b)

      if (statsA.total > statsB.total) {
        return -1
      } else if (statsA.total < statsB.total) {
        return 1
      } else {
        return statsB.created - statsA.created
      }
    })
  }

  render() {
    const { users } = this.props
    const userList = []

    for (let key in users) {
      userList.push(users[key])
    }

    this.sortRankingStats(userList)

    return (
      <div className="ranking-container">
        {
          // method to escape expression as string
          userList.map((user) => (
            <li key={"user_" + user.id}>
              <RankingUser user={user} stats={this.getRankingStats(user)}/>
            </li>
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
