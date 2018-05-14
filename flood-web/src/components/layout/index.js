import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu } from 'antd';
import {Redirect, Route,Switch} from 'react-router-dom'
import SideMenu from './sider'
import GloabHeader from '../../components/header/GloabHeader'
import Test from '../../pages/test'
import Test2 from '../../pages/test2'
const { Header, Sider, Content } = Layout;
import styles from './index.less'
import logo from '../../assets/logo.svg';
import Login from "../../pages/login";
import Registration from "../../pages/registration";
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
                        {this.props.children}
                    </Content>
                </Layout>

            </Layout>
        )
    }
}