import React from 'react';

import {Redirect, Route} from 'react-router-dom'
import PropTypes from "prop-types";

const PrivateRouteUI = ({ component: Component, ...rest }) => {
    const {hasAuthorized} =rest
    return (
        <Route
            {...rest} render={props => (

            hasAuthorized ? (
                <Component {...props}/>
            ) : (
                <Redirect to={

                    {
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
            )
        )} />
    )
}

export default PrivateRouteUI