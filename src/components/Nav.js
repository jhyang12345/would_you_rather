import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Logout from './Logout'
import "../css/Nav.css"

class Nav extends Component {
  render() {
    const { authorizeUser } = this.props
    console.log("Rerender!")
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
            <Logout></Logout>
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
