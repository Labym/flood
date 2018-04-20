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
            sendCode:this.props.intl.formatMessage(LoginMessageDefine.LOGIN_PAGE_SEND_VALIDATION_CODE),
            btnSendCodeDisabled:false,
            signing:this.props.signing,
            username:undefined,
            password:undefined
        }
        this.handleSign = this.handleSign.bind(this)
        this.handleSendValidationCode=this.handleSendValidationCode.bind(this)
    }
    handleSign () {
        this.props.form.validateFields({ force: true }, (err, values) => {
            this.props.login(values)
        });
        // this.setState({ rememberMe: !this.state.rememberMe })
        // this.props.login(this.state.username,this.state.password,this.props.captcha,this.props.rememberMe)
    }

    componentDidMount(){
        this.props.form.validateFields();
    }

    disableSignButton (fieldsError){
        if(this.props.signing){
            return true
        }
       return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    handleSendValidationCode(){
        let txt=this.props.intl.formatMessage(LoginMessageDefine.LOGIN_PAGE_SEND_VALIDATION_CODE)
        const self=this
        let timeOut=20;
        this.setState({btnSendCodeDisabled:true})
        self.setState({sendCode:txt+'('+(timeOut--)+')'})
        var updateValidationCodeTxtTimer=setInterval(()=>{
            self.setState({sendCode:txt+'('+(--timeOut)+')'})
            if(timeOut<=0){
                self.setState({btnSendCodeDisabled:false})
                self.setState({sendCode:txt})
                clearInterval(updateValidationCodeTxtTimer)
            }
        },1000)
    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {formatMessage} = this.props.intl;
        const FormItem = Form.Item;
        const Search =Input.Search
        const { username,password,captcha,rememberMe=false,signing=false} = this.props

        const userNameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const captchaError = isFieldTouched('captcha') && getFieldError('captcha');
        return (
            <Form>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    <Row gutter={8}>
                        <Col span={24}>
                            {getFieldDecorator('username', {
                                rules: [{
                                    type: 'email', message: formatMessage(LoginMessageDefine.NOT_VALID_EMAIL),
                                }, {
                                    required: true,
                                    message: formatMessage(LoginMessageDefine.USER_NAME_REQUIRED_ERROR),
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_USERNAME)} />
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
                                    message: formatMessage(LoginMessageDefine.NOT_VALID_PASSWORD),
                                }, {
                                    required: true, message: formatMessage(LoginMessageDefine.PASSWORD_REQUIRED_ERROR),
                                }],
                            })(
                                <Input type='password'
                                       prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_PASSWORD)} value={this.state.password}/>
                            )}

                        </Col>
                    </Row>
                </FormItem>
                <FormItem
                    validateStatus={captchaError ? 'error' : ''}
                    help={captchaError || ''}
                >

                    <Row gutter={8}>

                        <Col span={24}>
                            {getFieldDecorator('captcha', {
                                rules: [{
                                    len: 4,
                                    message: formatMessage(LoginMessageDefine.NOT_VALID_CAPTCHA),
                                }, {
                                    required: true, message: formatMessage(LoginMessageDefine.CAPTCHA_REQUIRED),
                                }],
                            })(
                            <Input size="large"
                                   className='ant-input-search ant-input-search-enter-button'
                                   placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_VALIDATION_CODE)}
                                   suffix={ <Button
                                       disabled={this.state.btnSendCodeDisabled}
                                       type="primary"
                                       className={`ant-input-search-button`}
                                       size="large"
                                       onClick={this.handleSendValidationCode}

                                   >
                                       {this.state.sendCode}
                                   </Button>}
                                   value={captcha}/>
                            )}

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
                            <Button type='primary' size='large'
                                    className="width100"
                                    disabled={this.disableSignButton(getFieldsError())}
                                    onClick={this.handleSign}

                            >{signing?formatMessage(LoginMessageDefine.SIGNING_IN_BTN):formatMessage(LoginMessageDefine.SIGN_IN_BTN)}</Button>
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
    username:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    captcha:PropTypes.string.isRequired,
    rememberMe: PropTypes.bool.isRequired
}


export default injectIntl(Form.create()(LoginBoxUI))