import React from 'react';
import PropTypes from 'prop-types'
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
        this.setState({firstInit:true})
        console.log('this.state.firstInit)')
        console.log(this.state.firstInit)
    }

    hasErrors (fieldsError){
        console.log('fieldsError')
        console.log(this.state.firstInit)
        if(this.state.firstInit){

           this.setState({firstInit:false})
            return true
        }
       return Object.keys(fieldsError).some(field => fieldsError[field])
    }

    render() {
        const {getFieldDecorator,getFieldsError} = this.props.form;
        const {formatMessage} = this.props.intl;
        const FormItem = Form.Item;
        const { username,password,captcha,rememberMe=false} = this.props
        return (
            <Form>
                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>
                            {getFieldDecorator('email', {
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
                <FormItem>
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

                        <Col span={16}>

                            <Input size="large" placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_VALIDATION_CODE)} value={captcha}/>

                        </Col>
                        <Col span={8}>
                            <Button

                                className={styles.getCaptcha}
                                size="large"

                            >
                                {formatMessage(LoginMessageDefine.LOGIN_PAGE_SEND_VALIDATION_CODE)}
                            </Button>
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

export default injectIntl(Form.create()(LoginBoxUI))