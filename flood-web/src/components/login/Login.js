import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Input, Icon} from 'antd';
import styles from './index.less'

export default class Login extends React.Component {
    render() {
        const userName = 'Please input your user name!'
        return (
            <div className='container'>
                <div className='content'>
                    <div className='top'>
                        <div className='header'>

                        </div>
                        <div className='desc'>Ant Design 是西湖区最具影响力的 Web 设计规范</div>

                    </div>
                </div>
            </div>
        )
    }

}