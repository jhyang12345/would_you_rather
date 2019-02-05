import React, { Component } from 'react'
import { connect } from 'react-redux'

class ErrorPage extends Component {
    render() {
        return (
            <div 
                className="error-message"
                style={
                    errorStyle
                }>
                404 Error
            </div>
        )
    }
}

const errorStyle = {
    textAlign: 'center',
    fontSize: "3.6em",
    fontWeight: "bold",
}

export default connect()(ErrorPage)