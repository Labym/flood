import React from 'react';

import {Redirect, Route} from 'react-router-dom'
import PropTypes from "prop-types";

const PrivateRouteUI = ({ component: Component, ...rest }) => (
    <Route
        {...rest} render={props => (

        sessionStorage.getItem("login") ? (
            <Component {...props}/>
        ) : (
            <Redirect to={

                {
                pathname: '/login?redirect='+props.location,
                state: { from: props.location }
            }} />
        )
    )} />
)

export default PrivateRouteUI