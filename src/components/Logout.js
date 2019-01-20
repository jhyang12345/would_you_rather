import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Logout extends Component {

  handleLogoutClick = (evt) => {
    evt.preventDefault()

    console.log("Logout button clicked!")
  }

  render() {
    return (
      <span
        className="logout-button authorized-user"
        onClick={this.handleLogoutClick}
        >
        Logout
      </span>
    )
  }
}


export default connect()(Logout)
