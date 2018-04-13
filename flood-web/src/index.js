import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {increaseAction} from  './actions'
import styles  from './index.less'
import { Provider,connect  } from 'react-redux'
import {store} from './reducers'
import {LoginBox} from './pages/login/container'
import { LocaleProvider } from 'antd';

import { addLocaleData, IntlProvider } from 'react-intl';
import '../locales/zh-CN'

addLocaleData(window.appLocale.data);


import SiderMenu from './components/sider/SiderBar'

class App extends React.Component {
    render() {
        console.log(styles)
        const { value, onIncreaseClick } = this.props
        return (
            <LocaleProvider locale={appLocale.antd}>
                <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                    <Provider store={store}>
                        <LoginBox />
                    </Provider>

                </IntlProvider>
            </LocaleProvider>

        )
    }
}
// function mapStateToProps(state) {
//     return {
//         value: state.count
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         onIncreaseClick: () => dispatch(increaseAction)
//     }
// }
//
// const CApp = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)



ReactDOM.render(<App/>, document.getElementById('root'));