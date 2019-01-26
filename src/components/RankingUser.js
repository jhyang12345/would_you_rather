import React, { Component } from 'react'
import "../css/RankingUser.css"
import avatar from '../images/avatar.png'

class RankingUser extends Component {
  render() {
    const { user } = this.props

    return (
      <div className="ranking-user-container">
        <div className="ranking-profile-container">
          <div className="ranking-profile-holder">
            <img src={avatar} />
          </div>
        </div>
        <div className="ranking-info-holder">
          <div className="ranking-name">
            {user.name}
          </div>
          <div className="ranking-stats">
            <div className="answered-points-holder">
              Answered questions
              <span>4</span>
            </div>
            <div className="created-points-holder">
              Created questions
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="ranking-summary-container">
          <div className="ranking-summary-holder">
            <div className="score-label">
              Score
            </div>
            <div className="score-box">10</div>
          </div>
        </div>
      </div>
    )
  }
}

export default RankingUser
