import {connect} from "react-redux";
import PrivateRouteUI from './PrivateRoute'
import * as Actions from 'action'

function mapStateToProps(state = {hasAuthorized: false}) {
    return {
        hasAuthorized: state.hasAuthorized,
    }
}

export const PrivateRoute = connect(
    mapStateToProps,
    Actions
)(PrivateRouteUI)
