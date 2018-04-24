import React from 'react';
import {Row,Col,Button,Form, Input,Select,Popover} from "antd/lib/index";
import {injectIntl, intlShape} from 'react-intl'
import CenterPage from '../../components/pageBox/centerPage'
import RegistrationUI from '../../components/registration'
import styles from './index.less'
import {LoginMessageDefine} from "../../../locales/message.define";
const FormItem = Form.Item;
const InputGroup=Input.Group
class Registration extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count: 1,
            confirmDirty: false,
            visible: false,
            help: '',
            prefix: '86',
        }
    }
    render () {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {formatMessage} = this.props.intl;
        const { count, prefix } = this.state;
        const userNameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const captchaError = isFieldTouched('captcha') && getFieldError('captcha');
        return (
            <CenterPage content={<RegistrationUI />} title={'Signup'} />
        )
    }
}

Registration.propTypes={
    intl: intlShape.isRequired,
}
export default injectIntl(Form.create()(Registration))