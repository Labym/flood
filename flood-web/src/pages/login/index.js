import React from 'react';
import {injectIntl, intlShape} from 'react-intl'
import {LoginBox} from './container';
import CenterPage from '../../components/pageBox/centerPage'
import styles from './style.less'
import {LoginMessageDefine} from "../../../locales/message.define";

class Login extends React.Component{
    render(){
        const {formatMessage} = this.props.intl;
        return (
           <CenterPage content={<LoginBox />} title={formatMessage(LoginMessageDefine.LOGIN_PAGE_TITLE)} />
        )
    }
}
Login.propTypes={
    intl: intlShape.isRequired,
}
export default injectIntl(Login)
