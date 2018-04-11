import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import {Layout} from 'antd'
import BaseLayout from './layouts/Layout'
import VSiderMenu from './components/SiderMenu/SiderMenu'
import GloabHeader from './components/header/GloabHeader'
import Login from './components/login/Login'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import collapseState from './reducers'
const {Header, Footer, Sider, Content} = Layout;
let store = createStore(collapseState)
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Layout>
                <VSiderMenu/>
                <Layout>
                    <Header style={{padding: 0}}>
                        <GloabHeader/>
                    </Header>
                </Layout>

            </Layout>
            </Provider>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));