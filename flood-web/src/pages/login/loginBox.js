import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import {Button, Checkbox, Col, Form, Icon, Input, Row} from 'antd'
import {FormattedMessage, injectIntl, intlShape} from 'react-intl'
import {LoginMessageDefine} from "../../../locales/message.define";
import {LoginConfig} from "../../config/FloodConfig";
import styles from './style.less'
import store from '../../reducers'

class LoginBoxUI extends React.Component {



    constructor(props, context) {
        super(props, context)
        this.state = {
            rememberMe: true,
            firstInit:true,
        }
        this.handleRememberMeClick = this.handleRememberMeClick.bind(this)
    }
    handleRememberMeClick () {
        this.setState({ rememberMe: !this.state.rememberMe })
        this.props.login(this.props.username,this.props.password,this.props.captcha,this.props.rememberMe)
    }

    componentDidMount(){
        this.props.form.validateFields();
    }

    hasErrors (fieldsError){
       return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {formatMessage} = this.props.intl;
        const FormItem = Form.Item;
        const { username,password,captcha,rememberMe=false} = this.props

        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        const inputClassName = classNames(prefixCls, className, {
            [`${prefixCls}-enter-button`]: !!false,
            [`${prefixCls}-${size}`]: !!false,
        });
        return (
            <Form>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    <Row gutter={8}>
                        <Col span={24}>
                            {getFieldDecorator('userName', {
                                rules: [{
                                    type: 'email', message: formatMessage(LoginMessageDefine.NOT_VALID_EMAIL),
                                }, {
                                    required: true,
                                    message: formatMessage(LoginMessageDefine.USER_NAME_REQUIRED_ERROR),
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_USERNAME)} value={username}/>
                            )}
                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    <Row gutter={8}>
                        <Col span={24}>

                            {getFieldDecorator('password', {
                                rules: [{
                                    pattern: LoginConfig.passwordPattern,
                                    message: formatMessage(LoginMessageDefine.PASSWORD_REQUIRED_ERROR),
                                }, {
                                    required: true, message: formatMessage(LoginMessageDefine.NOT_VALID_PASSWORD),
                                }],
                            })(
                                <Input type='password'
                                       prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_PASSWORD)} value={password}/>
                            )}

                        </Col>
                    </Row>
                </FormItem>
                <FormItem>

                    <Row gutter={8}>

                        <Col span={24}>

                            <Input size="large"
                                   prefixCls={'ant-input'}
                                   className={inputClassName}
                                   placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_VALIDATION_CODE)}
                                   suffix={ <Button
                                       type="primary"
                                       className={`ant-input-search-button`}
                                       size="large"

                                   >
                                       {formatMessage(LoginMessageDefine.LOGIN_PAGE_SEND_VALIDATION_CODE)}
                                   </Button>}
                                   value={captcha}/>

                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Checkbox onChange={this.handleRememberMeClick} checked={rememberMe}
                                      size='large'
                                      className='width100'>{formatMessage(LoginMessageDefine.REMEMBER_ME)} </Checkbox>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Button type='primary' size='large' className="width100" disabled={this.hasErrors(getFieldsError())}>{formatMessage(LoginMessageDefine.LOGIN_BTN)}</Button>
                        </Col>
                    </Row>
                </FormItem>

            </Form>

        )
    }
}

LoginBoxUI.propTypes={
    intl: intlShape.isRequired,
    login: PropTypes.func.isRequired,
    username:PropTypes.string,
    password:PropTypes.string,
    captcha:PropTypes.string,
    rememberMe: PropTypes.bool
}

LoginBoxUI.defaultProps = {
    inputPrefixCls: 'ant-input',
    prefixCls: 'ant-input-search',
    enterButton: false,
};

export default injectIntl(Form.create()(LoginBoxUI))