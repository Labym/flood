import React from 'react';
import {LoginBox} from './container';
import styles from './style.less'
class Login extends React.Component{

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.header}>
                        </div>
                        <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
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

export  default Login