import React from 'react';
import PropTypes from 'prop-types'
import {injectIntl, intlShape} from 'react-intl'
import styles from './centerPage.less'
import {LoginMessageDefine} from "../../../locales/message.define";

class CenterPage extends React.Component{
    render(){
        const {formatMessage} = this.props.intl;
        const {content,title} = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.header}>

                        </div>
                        <div className={styles.desc}>
                            <b>
                                {title}
                            </b>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.login}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
CenterPage.propTypes={
    intl: intlShape.isRequired,
    title:PropTypes.string,
    content: PropTypes.any
}
export default injectIntl(CenterPage)
