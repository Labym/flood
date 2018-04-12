import React from 'react';
import {Icon, Layout, Menu} from 'antd';
import logo from '../../assets/logo.svg';
const {Sider} = Layout;
const {SubMenu} = Menu;

const menus=[
    {
        name:'CA1',
        icon:'user',
        url:'/'

    },
    {
        name:'CA2',
        icon:'user',
        url:'',
        sub:[
            {
                name:'CA2-1',
                icon:'user',
                url:''
            }, {
                name:'CA2-2',
                icon:'',
                url:''
            },
        ]
    },
]


function createMenus() {


      return  menus.map((mn)=>{
          const {subs=[]}=mn
          if(subs.length==0){
              return  <Menu.Item key={mn.name}>
                  <Icon type={mn.icon}/>
                  <span>{mn.name}</span>
              </Menu.Item>
          }

          return <SubMenu key={mn.name}
                           title={<span><Icon type={mn.icon}/><span>{mn.name}</span></span>}>
              {
                  subs.map((sub)=>{
                      return <Menu.Item key={sub.name}>
                          <Icon type={sub.icon}/>
                          <span>{sub.name}</span>
                      </Menu.Item>
                  })
              }

          </SubMenu>


      });


}

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
                    {
                        menus.map((mn)=>{
                            const {subs=[]}=mn
                            if(subs.length==0){
                                return  <Menu.Item key={mn.name}>
                                    <Icon type={mn.icon}/>
                                    <span>{mn.name}</span>
                                </Menu.Item>
                            }

                            return <SubMenu key={mn.name}
                                            title={<span><Icon type={mn.icon}/><span>{mn.name}</span></span>}>
                                {
                                    subs.map((sub)=>{
                                        return <Menu.Item key={sub.name}>
                                            <Icon type={sub.icon}/>
                                            <span>{sub.name}</span>
                                        </Menu.Item>
                                    })
                                }

                            </SubMenu>


                        })
                    }
                </Menu>
            </Sider>
        )
    }
}

export default SiderMenu