import React, {Component} from 'react'
import { connect } from 'react-redux'
import { unauthorizeUser } from "../actions/authorizeUser"

class Logout extends Component {

  handleLogoutClick = (evt) => {
    evt.preventDefault()

    const { dispatch } = this.props

    dispatch(unauthorizeUser())

    this.props.logoutRedirect()

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

// does dispatch get passed down no matter what?.?
function mapStateToProps({dispatch}) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps)(Logout)
