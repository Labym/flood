import * as LoginActions from "./action";
import {connect} from "react-redux";
import LoginBoxUI from './loginBox'
function mapStateToProps(state) {
    const {LoginReducer}=state
    const {authorized}=LoginReducer.toJS()
    const {signing}=LoginReducer.toJS()
    return {
        hasAuthorized:authorized,
        signing:signing
    }
}

export  const LoginBox=connect(
    mapStateToProps,
    LoginActions
)(LoginBoxUI)
