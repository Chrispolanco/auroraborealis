import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 


class Main extends Component {

    render() {
        <div> 
            <Login/> 
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return(
        loginUser: user=> dispatch({type: "LOGIN_USER", user})
    )
}

export default connect(null, )(Main)