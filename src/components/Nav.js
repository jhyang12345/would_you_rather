import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Nav extends Component {
  render() {
    const { authorizeUser } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          {authorizeUser !== null &&
            <span class="authorized-user">
              Name
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

export default connect(mapStateToProps)(Nav)
