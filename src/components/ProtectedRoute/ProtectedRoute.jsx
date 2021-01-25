import React from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = this.props.admin===5
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

const mapStateToProps = (state) => ({
  admin: state.user.privilege
})

export default connect(mapStateToProps)(ProtectedRoute);