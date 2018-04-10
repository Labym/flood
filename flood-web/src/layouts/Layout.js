import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import './index.css'
export default class BaseLayout extends React.Component{
    constructor(params){
        super(params)
    }
    render (){
        return (
            <Layout>
            <Sider

    >
    <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
        </Menu.Item>
        </Menu>
        </Sider>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
    <Icon
        className="trigger"
        type='menu-unfold'
        />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
        Content
        </Content>
        </Layout>
        </Layout>
        )
    }
}