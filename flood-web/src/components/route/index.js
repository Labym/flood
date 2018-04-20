import {connect} from "react-redux";
import PrivateRouteUI from './PrivateRoute'
import * as Actions from './action'
function mapStateToProps(state={authorized:false}) {
    return {
        authorized: state.authorized,
    }
}

export  const PrivateRoute=connect(
    mapStateToProps,
    Actions
)(PrivateRouteUI)
