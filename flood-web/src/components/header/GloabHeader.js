import React, {PureComponent} from 'react';
import {Menu, Icon, Spin, Tag, Dropdown, Avatar, Divider, Tooltip} from 'antd';
import styles from './index.less';
import {changeLayoutCollapsed} from '../../actions'
export default class GloabHeader extends React.Component {

    handleClick (){
        changeLayoutCollapsed()
    }
    render() {
        const {onIncreaseClick} = this.props
        const menu = (
            <Menu className='menu' selectedKeys={[]}>
                <Menu.Item disabled>
                    <Icon type="user"/>个人中心
                </Menu.Item>
                <Menu.Item disabled>
                    <Icon type="setting"/>设置
                </Menu.Item>
                <Menu.Item key="triggerError">
                    <Icon type="close-circle"/>触发报错
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout">
                    <Icon type="logout"/>退出登录
                </Menu.Item>
            </Menu>
        )

        const currentUser={
            name:'123',
            avatar:''
        }
        return (
            <div className={styles.header}>
                <Icon
                    className={styles.trigger}
                    type={'menu-fold'}

                />

            </div>
        )
    }

}