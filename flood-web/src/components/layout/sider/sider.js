import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon,Spin } from 'antd';
import styles from './index.less'
import {intlShape} from "react-intl";

const { Sider } = Layout;
const { SubMenu } = Menu;
class SideMenu extends React.Component{

    componentDidMount(){
        this.props.loadMenus()
    }

    render (){
        const {logo,menus}=this.props
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

SideMenu.propTypes = {
    menus: PropTypes.object,
}

export default SideMenu
