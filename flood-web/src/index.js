import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Layout} from 'antd'
import BaseLayout from './layouts/Layout'
import SiderMenu from './components/SiderMenu/SiderMenu'
import GloabHeader from './components/header/GloabHeader'
import Login from './components/login/Login'

const {Header, Footer, Sider, Content} = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout>
                <SiderMenu/>
                <Layout>
                    <Header style={{padding: 0}}>
                        <GloabHeader/>

                    </Header>
                </Layout>

            </Layout>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));