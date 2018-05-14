import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {NavLink,Link } from 'react-router-dom'
import {injectIntl, intlShape} from 'react-intl'
import { Layout, Menu, Icon,Spin } from 'antd';
import styles from './index.less'
import {isEmpty} from 'lodash'

const { Sider } = Layout;
const { SubMenu } = Menu;

import {LocalMessageDefine} from "../../../../locales/message.define";

class SideMenu extends React.Component{

    componentDidMount(){
        this.props.loadMenus()
    }


    render (){
        const {logo,menus}=this.props
        const {formatMessage} = this.props.intl;
        console.log(LocalMessageDefine)
        console.log(menus)
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

                <Menu
                    key="Menu"
                    theme="dark"
                    mode="inline"
                    style={{ padding: '16px 0', width: '100%' }}
                >
                    {!isEmpty(menus.children)?menus.children.map((menu) => (
                                isEmpty(menu.children)?
                                    <Menu.Item key={`item_${menu.code}`}>
                                        <Icon type="pie-chart" />
                                        <span>{menu.name}</span>
                                    </Menu.Item>
                                    :
                                    <SubMenu key={`item_${menu.code}`}  title={<span><Icon type="mail" /><span>{formatMessage(LocalMessageDefine[menu.extensions.language])}</span></span>}>
                                        {
                                            menu.children.map((item)=>(
                                                <Menu.Item key={`sub_${item.code}`}>
                                                    <NavLink to={item.url}>
                                                    <span>{item.name}</span>
                                                    </NavLink>
                                                </Menu.Item>
                                            ))
                                        }
                                    </SubMenu>
                    )):null}
                </Menu>


            </Sider>
        )
    }
}

SideMenu.propTypes = {
    intl: intlShape.isRequired,
    menus: PropTypes.object,
}

export default injectIntl(SideMenu)
