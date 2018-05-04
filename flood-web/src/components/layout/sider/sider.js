import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon,Spin } from 'antd';
import styles from './index.less'

const { Sider } = Layout;
const { SubMenu } = Menu;
export default class SideMenu extends React.Component{

    componentDidMount(){
        this.props.loadMenus()
    }

    render (){
        const {logo}=this.props
        return (
            <Sider
                width={256}
                className={styles.sider}
            >
                <div className={styles.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <h1>Dashboard</h1>
                    </Link>
                </div>
                <Spin />
                {/*<Menu*/}
                {/*disabled={false}*/}
                {/*key="Menu"*/}
                {/*theme="dark"*/}
                {/*mode="inline"*/}
                {/*style={{ padding: '16px 0', width: '100%' }}*/}
                {/*>*/}
                {/*aaa*/}
                {/*</Menu>*/}
            </Sider>
        )
    }
}