import * as LoginActions from "./action";
import {connect} from "react-redux";
import LoginBoxUI from './loginBox'
function mapStateToProps(state={rememberMe:false}) {
    console.log('state is:')
    console.log(state)
    return {

        rememberMe: state.rememberMe
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(LoginActions.login)
    }
}
export  const LoginBox=connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBoxUI)
