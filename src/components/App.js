import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import UserList from "./UserList"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const {users} = this.props
    return (
      <Router>
        <Fragment>
          {this.props.authorized !== true
            ? <Route path="/" component={UserList} />
            :
              <div>
                Logged in
              </div>

          }
          <div className="container">

          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authorizeUser }) {
  return {
    authorized: authorizeUser !== null
  }
}

export default connect(mapStateToProps)(App)
