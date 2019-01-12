import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserList extends Component {

  render() {
    const { users } = this.props
    console.log("Rendering UserList", users)
    return (
      <Fragment>
        <ul>
          {users instanceof Array && users.map((user) => (
            <li key={user.id}>
              <User user={user} />
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

function mapStateToProps({ users }) {
  console.log(users)
  const userList = []
  for (let key in users) {
    userList.push(users[key])
  }
  return {
    users: userList,
  }
}

export default connect(mapStateToProps)(UserList)
