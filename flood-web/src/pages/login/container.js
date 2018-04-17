import * as LoginActions from "./action";
import {connect} from "react-redux";
import LoginBoxUI from './loginBox'
import {bindActionCreators} from 'redux'
function mapStateToProps(state={rememberMe:false}) {
    console.log('state is:')
    console.log(state)
    return {

        rememberMe: state.rememberMe
    }
}

export  const LoginBox=connect(
    mapStateToProps,
    LoginActions
)(LoginBoxUI)
