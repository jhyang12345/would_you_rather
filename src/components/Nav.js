import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Logout from './Logout'
import "../css/Nav.css"

class Nav extends Component {
  state = {
    toHome: false,
  }

  logoutRedirect = () => {
    console.log("Logout clicked")
  }

  render() {
    const { authorizeUser } = this.props
    console.log("Rerender!")

    // if (this.state.toHome === true) {
    //   return <Redirect to='/' />
    // }

    return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Ranking
          </NavLink>
        </li>
        {authorizeUser !== null &&
          <Fragment>
            <span className="authorized-user">
              {authorizeUser.name}
            </span>
            <Logout logoutRedirect={this.logoutRedirect} />
          </Fragment>
        }
      </ul>
    </nav>
  )
  }
}

function mapStateToProps({ authorizeUser }) {
  return {
    authorizeUser,
  }
}

// withRouter re-renders NavLinks for some reason!!
export default withRouter(connect(mapStateToProps)(Nav))
