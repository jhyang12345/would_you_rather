import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "../css/Nav.css"

export default function Nav(props) {
  const { authorizeUser } = props
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

// class Nav extends Component {
//   render() {
//     const { authorizeUser } = this.props
//
//     return (
//       <nav className='nav'>
//         <ul>
//           <li>
//             <NavLink to='/' exact activeClassName='active'>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to='/new' activeClassName='active'>
//               New Question
//             </NavLink>
//           </li>
//           {authorizeUser !== null &&
//             <span className="authorized-user">
//               {authorizeUser.name}
//             </span>
//           }
//         </ul>
//       </nav>
//     )
//   }
// }
//
// function mapStateToProps({ authorizeUser }) {
//
//   return {
//     authorizeUser,
//   }
// }
//
// export default connect(mapStateToProps)(Nav)
