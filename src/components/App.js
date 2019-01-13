import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared"
import LoadingBar from 'react-redux-loading'
import UserList from "./UserList"
import Nav from "./Nav"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const {users} = this.props
    return (
      <Router>
        <Fragment>
          <Nav />
          <LoadingBar />
          <div className="container">
            {this.props.authorized !== true
              ? <Route path="/" component={UserList} />
              :
                <div>
                  Logged in
                </div>

            }
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
