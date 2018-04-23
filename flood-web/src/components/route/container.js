import {connect} from "react-redux";
import PrivateRouteUI from './PrivateRoute'
import * as Actions from './action'

function mapStateToProps(state) {
    const {LoginReducer}=state
    const {authorized}=LoginReducer.toJS()
    return {
        hasAuthorized:authorized,
    }
}

export const PrivateRoute = connect(
    mapStateToProps,
    Actions
)(PrivateRouteUI)
