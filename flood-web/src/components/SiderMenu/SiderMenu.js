import React from 'react';
import {Icon, Layout, Menu} from 'antd';
import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
const {Sider} = Layout;
const {SubMenu} = Menu;
class SiderMenu extends React.Component {
    render() {
        const {collapsed=true}=this.props
        return (
            <Sider
                trigger={null}
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                width={256}
                className='sider'
            >
                <div className='logo' key="logo">

                    <img src={logo} alt="logo"/>
                    <h1>Ant Design Pro</h1>

                </div>
                <Menu
                    key="Menu"
                    theme="dark"
                    mode="inline"
                    style={{padding: '16px 0', width: '100%'}}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"/>
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user"/><span>User</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team"/><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file"/>
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
import { connect } from 'react-redux'
import {changeLayoutCollapsed} from '../../actions'
SiderMenu.propTypes ={
    collapsed: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        collapsed: !collapsed
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(changeLayoutCollapsed)
    }
}
const VSiderMenu =connect(
    mapStateToProps,
    mapDispatchToProps
)(SiderMenu)

export  default VSiderMenu