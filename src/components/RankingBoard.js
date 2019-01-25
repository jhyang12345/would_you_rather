import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'

class RankingBoard extends Component {



  render() {
    return (
      <div>RankingBoard</div>
    )
  }
}


export default withRouter(connect()(RankingBoard))
