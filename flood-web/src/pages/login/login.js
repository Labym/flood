import React from 'react';
import PropTypes from 'prop-types'
import {Button, Checkbox, Col, Form, Icon, Input, Row} from 'antd'
import {FormattedMessage, injectIntl, intlShape} from 'react-intl'
import {LoginMessageDefine} from "../../../locales/message.define";
import {LoginConfig} from "../../config/FloodConfig";
import styles from './style.less'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'
import * as LoginActions from "./action";
import * as loginActions from "./action";
class LoginBoxUI extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            rememberMe: true
        }
        this.handleRememberMeClick = this.handleRememberMeClick.bind(this)
    }
    handleRememberMeClick () {
        console.log(this)
        console.log("clicked remember me!:"+this.state.rememberMe)
        this.setState({ rememberMe: !this.state.rememberMe });
        let loginDTO= {}
        //this.props.login('name')
        console.log(this.props.actions)
        this.props.actions('name')

    }

    render() {

        const FormItem = Form.Item;
        const { rememberMe=false} = this.props
        const { dispatch } = this.props;
        return (
            <Form>
                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>

                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder="Please input email"/>

                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>


                                <Input type='password'
                                       prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} size="large"
                                       placeholder="Please input password"/>


                        </Col>
                    </Row>
                </FormItem>

                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Checkbox onChange={this.handleRememberMeClick} checked={rememberMe}
                                      size='large'
                                      className='w-100'>Remember Me:{this.props.rememberMe} </Checkbox>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Button type='primary' size='large' className='w-100'><FormattedMessage
                                id="login.submit.button"
                                defaultMessage='Login'
                            /> </Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>

                    <Row gutter={8}>
                        <Col span={16}>
                            <Input size="large" placeholder="large size"/>
                        </Col>
                        <Col span={8}>
                            <Button

                                className={styles.getCaptcha}
                                size="large"

                            >
                                {'获取验证码'}
                            </Button>
                        </Col>
                    </Row>
                </FormItem>

            </Form>

        )
    }
}

LoginBoxUI.propTypes={
    //login: PropTypes.func.isRequired,
    rememberMe: PropTypes.bool,
}

function mapStateToProps(state={rememberMe:false}) {
    console.log('state is:')
    console.log(state)
    return {

        rememberMe: state.rememberMe
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions.login,dispatch)
    }
}
export  const LoginBox1=connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBoxUI)

//export default injectIntl(Form.create()(LoginBoxUI))