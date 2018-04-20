import * as LoginActions from "./action";
import {connect} from "react-redux";
import LoginBoxUI from './loginBox'
import {bindActionCreators} from 'redux'
function mapStateToProps(state={rememberMe:false,signing:false,username:'123123@aa.com'}) {
    return {

        rememberMe: state.rememberMe,
        username:state.username,
        password:state.password,
        signing:state.signing
    }
}

export  const LoginBox=connect(
    mapStateToProps,
    LoginActions
)(LoginBoxUI)
