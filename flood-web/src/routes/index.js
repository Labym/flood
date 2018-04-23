import React from 'react';
import AppHome from '../pages/index'
import Login from '../pages/login'
import {Switch,Route} from 'react-router-dom'
import PrivateRoute from '../components/route'

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRoute exact  path='/' component={AppHome} />
                <Route path='/login' component={Login}/>
            </Switch>
        )
    }
}