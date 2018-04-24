import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu } from 'antd';
import SideMenu from './sider'
const { Header, Sider, Content } = Layout;
import styles from './index.less'
import logo from '../../assets/logo.svg';
export default class FloodLayout extends React.Component{
    render (){
        return (
            <Layout>
                <SideMenu
                    logo={logo}
                    >
                </SideMenu>

            </Layout>
        )
    }
}