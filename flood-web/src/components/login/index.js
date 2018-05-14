import React from 'react';
import {injectIntl, intlShape} from 'react-intl'
import {LoginBox} from './container';
import styles from './style.less'
import {LocalMessageDefine} from "../../../locales/message.define";

class Login extends React.Component{
    render(){
        const {formatMessage} = this.props.intl;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.header}>

                        </div>
                        <div className={styles.desc}>
                            <b>

                                {formatMessage(LocalMessageDefine.LOGIN_PAGE_TITLE)}

                            Login
                            </b>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.login}>
                            <LoginBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Login.propTypes={
    intl: intlShape.isRequired,
}
export default injectIntl(Login)
