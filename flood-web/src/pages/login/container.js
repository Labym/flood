import * as LoginActions from "./action";
import {connect} from "react-redux";
import LoginBoxUI from './loginBox'
import {bindActionCreators} from 'redux'
function mapStateToProps(state) {
    const {LoginReducer,RouteReducer}=state
    const {authorized}=RouteReducer.toJS()
    const {signing}=LoginReducer.toJS()
    return {
        haAuthorized:authorized,
        signing:signing
    }
}

export  const LoginBox=connect(
    mapStateToProps,
    LoginActions
)(LoginBoxUI)
