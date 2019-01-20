import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
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
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        {authorizeUser !== null &&
          <span className="authorized-user">
            {authorizeUser.name}
          </span>

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
