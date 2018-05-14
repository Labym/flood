import React from 'react';
import PropTypes from 'prop-types'
import {Button, Checkbox, Col, Form, Icon, Input, Row,Alert } from 'antd'
import {injectIntl, intlShape} from 'react-intl'
import {LocalMessageDefine} from "../../../locales/message.define";
import {LoginConfig} from "../../config/FloodConfig";
import {Redirect,Link} from 'react-router-dom'
import styles from './style.less'
class LoginBoxUI extends React.Component {


    constructor(props, context) {
        super(props, context)
        this.state = {
            rememberMe: true,
            sendCode: this.props.intl.formatMessage(LocalMessageDefine.GET_CAPTCHA),
            btnSendCodeDisabled: false,
            signing: this.props.signing,
            username: undefined,
            password: undefined
        }
        this.handleSign = this.handleSign.bind(this)
        this.handleSendValidationCode = this.handleSendValidationCode.bind(this)
    }

    handleSign() {
        this.props.form.validateFields({force: true}, (err, values) => {
            this.props.login(values)
        });
        // this.setState({ rememberMe: !this.state.rememberMe })
        // this.props.login(this.state.username,this.state.password,this.props.captcha,this.props.rememberMe)
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    disableSignButton(fieldsError) {
        if (this.props.signing) {
            return true
        }
        return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    handleSendValidationCode() {
        let txt = this.props.intl.formatMessage(LocalMessageDefine.GET_CAPTCHA)
        const self = this
        let timeOut = 20;
        this.setState({btnSendCodeDisabled: true})
        self.setState({sendCode: txt + '(' + (timeOut--) + ')'})
        var updateValidationCodeTxtTimer = setInterval(() => {
            self.setState({sendCode: txt + '(' + (--timeOut) + ')'})
            if (timeOut <= 0) {
                self.setState({btnSendCodeDisabled: false})
                self.setState({sendCode: txt})
                clearInterval(updateValidationCodeTxtTimer)
            }
        }, 1000)
    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {formatMessage} = this.props.intl;
        const FormItem = Form.Item;
        const Search = Input.Search
        const {hasAuthorized, captcha, rememberMe = false, signing = false} = this.props

        const userNameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const captchaError = isFieldTouched('captcha') && getFieldError('captcha');


        return ((hasAuthorized)? <Redirect to="/" />:

            <Form>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    <Row gutter={8}>
                        <Col span={24}>
                            {getFieldDecorator('username', {
                                rules: [{
                                    type: 'email', message: formatMessage(LocalMessageDefine.NOT_VALID_EMAIL),
                                }, {
                                    required: true,
                                    message: formatMessage(LocalMessageDefine.USER_NAME_REQUIRED_ERROR),
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder={formatMessage(LocalMessageDefine.TIPS_INPUT_USERNAME)}/>
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
                                    message: formatMessage(LocalMessageDefine.NOT_VALID_PASSWORD),
                                }, {
                                    required: true, message: formatMessage(LocalMessageDefine.PASSWORD_REQUIRED_ERROR),
                                }],
                            })(
                                <Input type='password'
                                       prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder={formatMessage(LocalMessageDefine.TIPS_INPUT_PASSWORD)}
                                       value={this.state.password}/>
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
                                    message: formatMessage(LocalMessageDefine.NOT_VALID_CAPTCHA),
                                }, {
                                    required: true, message: formatMessage(LocalMessageDefine.CAPTCHA_REQUIRED),
                                }],
                            })(
                                <Input size="large"
                                       className='ant-input-search ant-input-search-enter-button'
                                       placeholder={formatMessage(LocalMessageDefine.TIPS_INPUT_VALIDATION_CODE)}
                                       suffix={<Button
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
                        <Col span={12}>
                            <Checkbox onChange={this.handleRememberMeClick} checked={rememberMe}
                                      size='large'
                                      className='width100'>{formatMessage(LocalMessageDefine.REMEMBER_ME)} </Checkbox>
                        </Col>

                        <Col span={12} className={styles.forgetPassword}>
                            <Link to='/forgetpassword' >{formatMessage(LocalMessageDefine.FORGET_PASSWORD)} </Link>
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

                            >{signing ? formatMessage(LocalMessageDefine.SIGNING_IN_BTN) : formatMessage(LocalMessageDefine.SIGN_IN_BTN)}</Button>
                        </Col>
                    </Row>
                </FormItem>

            </Form>

        )
    }
}

LoginBoxUI.propTypes = {
    intl: intlShape.isRequired,
    login: PropTypes.func.isRequired,
    hasAuthorized: PropTypes.bool.isRequired
}


export default injectIntl(Form.create()(LoginBoxUI))