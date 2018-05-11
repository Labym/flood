import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu } from 'antd';
import SideMenu from './sider'
import GloabHeader from '../../components/header/GloabHeader'
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

                <Layout>
                   <Header style={{ padding: 0 }}>
                    <GloabHeader />
                   </Header>

                    <Content style={{ margin: '24px 24px 0', height: '100%' }}>

                    </Content>
                </Layout>

            </Layout>
        )
    }
}