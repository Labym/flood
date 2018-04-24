import React from 'react';
import {Row,Col,Button,Form, Input,Select,Popover} from "antd/lib/index";
import {injectIntl, intlShape} from 'react-intl'
import {Link} from 'react-router-dom'
import styles from './index.less'
import {LoginMessageDefine} from "../../../locales/message.define";
const FormItem = Form.Item;
const InputGroup=Input.Group
class RegistrationUI extends React.Component{

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
            <div className={styles.main}>
                <Form >
                    <FormItem>
                        {getFieldDecorator('mail', {
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
                        })(<Input size="large" placeholder={formatMessage(LoginMessageDefine.TIPS_INPUT_USERNAME)} />)}
                    </FormItem>
                    <FormItem help={this.state.help}>
                        <Popover
                            content={
                                <div style={{ padding: '4px 0' }}>
                                    {/*{passwordStatusMap[this.getPasswordStatus()]}*/}
                                    {/*{this.renderPasswordProgress()}*/}
                                    <div style={{ marginTop: 10 }}>
                                        请至少输入 6 个字符。请不要使用容易被猜到的密码。
                                    </div>
                                </div>
                            }
                            overlayStyle={{ width: 240 }}
                            placement="right"
                            visible={this.state.visible}
                        >
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        //validator: this.checkPassword,
                                    },
                                ],
                            })(<Input size="large" type="password" placeholder="至少6位密码，区分大小写" />)}
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
                                    //validator: this.checkConfirm,
                                },
                            ],
                        })(<Input size="large" type="password" placeholder="确认密码" />)}
                    </FormItem>
                    <FormItem>
                        <InputGroup compact>
                            <Select
                                size="large"
                                value={prefix}
                                onChange={this.changePrefix}
                                style={{ width: '20%' }}
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
                            })(<Input size="large" style={{ width: '80%' }} placeholder="11位手机号" />)}
                        </InputGroup>
                    </FormItem>
                    <FormItem>
                        <Row gutter={8}>
                            <Col span={16}>
                                {getFieldDecorator('captcha', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入验证码！',
                                        },
                                    ],
                                })(<Input size="large" placeholder="验证码" />)}
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
                            type="primary"
                            htmlType="submit"
                        >
                            注册
                        </Button>
                        <Link className={styles.login} to="/user/login">
                            使用已有账户登录
                        </Link>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

RegistrationUI.propTypes={
    intl: intlShape.isRequired,
}
export default injectIntl(Form.create()(RegistrationUI))