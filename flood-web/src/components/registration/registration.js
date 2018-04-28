import React from 'react';
import PropTypes from 'prop-types'
import {Button, Col, Form, Input, Popover, Progress, Row, Select} from "antd/lib/index";
import {injectIntl,intlShape} from 'react-intl'
import {Link} from 'react-router-dom'
import styles from './index.less'
import {LoginMessageDefine} from "../../../locales/message.define";

const FormItem = Form.Item;
const InputGroup = Input.Group

const passwordStatusMap = {
    ok: <div className={styles.success}>强度：强</div>,
    pass: <div className={styles.warning}>强度：中</div>,
    poor: <div className={styles.error}>强度：太短</div>,
}
const passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    poor: 'exception',
}

class RegistrationUI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            confirmDirty: false,
            visible: false,
            help: '',
            prefix: '86',
        }
        this.passwordOnFocus = this.passwordOnFocus.bind(this)
        this.passwordOnBlur = this.passwordOnBlur.bind(this)
        this.getPasswordStatus = this.getPasswordStatus.bind(this)
        this.renderPasswordProgress = this.renderPasswordProgress.bind(this)
        this.checkConfirm=this.checkConfirm.bind(this)
        this.handleRegister=this.handleRegister.bind(this)
    }

    passwordOnFocus() {
        console.log('handle input password 11')
        this.state.visible = true
    }

    passwordOnBlur() {
        console.log('handle input password 11')
        this.state.visible = false
    }

    getPasswordStatus() {
        const {form} = this.props;
        const value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    }

    renderPasswordProgress() {
        const {form} = this.props;
        const value = form.getFieldValue('password');
        const passwordStatus = this.getPasswordStatus();
        return value && value.length ? (
            <div className={styles[`progress-${passwordStatus}`]}>
                <Progress
                    status={passwordProgressMap[passwordStatus]}
                    className={styles.progress}
                    strokeWidth={6}
                    percent={value.length * 5 > 100 ? 100 : value.length * 5}
                    showInfo={false}
                />
            </div>
        ) : null;
    }

    checkConfirm(rule, value, callback) {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不匹配!');
        } else {
            callback();
        }
    }

    handleRegister(){
        this.props.form.validateFields({force: true}, (err, values) => {
            this.props.register(values)
        });
    }

    render() {


        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const {formatMessage} = this.props.intl;
        const {count, prefix} = this.state;
        const userNameError = isFieldTouched('email') && getFieldError('email');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const captchaError = isFieldTouched('captcha') && getFieldError('captcha');
        return (
            <div className={styles.main}>
                <Form>
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    required: true,
                                    message: formatMessage(LoginMessageDefine.TIPS_INPUT_USERNAME),
                                },
                                {
                                    type: 'email',
                                    message: formatMessage(LoginMessageDefine.NOT_VALID_EMAIL),
                                },
                            ],
                        })(<Input size="large"
                                  placeholder='用户名或者Email'
                        />)}
                    </FormItem>
                    <FormItem help={this.state.help}>
                        <Popover
                            content={
                                <div style={{padding: '4px 0'}}>
                                    {passwordStatusMap[this.getPasswordStatus()]}
                                    {this.renderPasswordProgress()}
                                    <div style={{marginTop: 10}}>
                                        请至少输入 6 个字符。请不要使用容易被猜到的密码。
                                    </div>
                                </div>
                            }
                            overlayStyle={{width: 240}}
                            placement="right"
                            visible={this.state.visible}
                        >
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        min:6,
                                        message: formatMessage(LoginMessageDefine.TIPS_INPUT_USERNAME),
                                    },
                                ],
                            })(<Input size="large"
                                      type="password"
                                      onFocus={this.passwordOnFocus}
                                      onBlur={this.passwordOnBlur}
                                      placeholder="至少6位密码，区分大小写"/>)}
                        </Popover>
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认密码！',
                                },
                                {
                                    validator: this.checkConfirm,
                                },
                            ],
                        })(<Input size="large" type="password" placeholder="确认密码"/>)}
                    </FormItem>
                    <FormItem>
                        <InputGroup compact>
                            <Select
                                size="large"
                                value={prefix}
                                style={{width: '20%'}}
                            >
                                <Option value="86">+86</Option>
                                <Option value="87">+87</Option>
                            </Select>
                            {getFieldDecorator('mobile', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入手机号！',
                                    },
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: '手机号格式错误！',
                                    },
                                ],
                            })(<Input size="large" style={{width: '80%'}} placeholder="11位手机号"/>)}
                        </InputGroup>
                    </FormItem>
                    <FormItem>
                        <Row gutter={8}>
                            <Col span={16}>
                                {getFieldDecorator('captcha.value', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入验证码！',
                                        },
                                    ],
                                })(<Input size="large" placeholder="验证码"/>)}
                            </Col>
                            <Col span={8}>
                                <Button
                                    size="large"
                                    disabled={count}
                                    className={styles.getCaptcha}
                                    // onClick={this.onGetCaptcha}
                                >
                                    {count ? `${count} s` : '获取验证码'}
                                </Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Button
                            size="large"
                            // loading={submitting}
                            className={styles.submit}
                            onClick={this.handleRegister}
                            type="primary"
                            htmlType="submit"
                        >
                            注册
                        </Button>
                        <Link className={styles.login} to="/login">
                            使用已有账户登录
                        </Link>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

RegistrationUI
    .propTypes = {
    intl: intlShape.isRequired,
    register:PropTypes.func.isRequired
}
export default injectIntl(Form.create()(RegistrationUI))