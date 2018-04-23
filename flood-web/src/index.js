import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import styles from './index.less'
import {Provider} from 'react-redux'
import {store,history} from './reducers'
import {LocaleProvider} from 'antd';
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes'
import {
    ConnectedRouter
} from 'react-router-redux'
import {addLocaleData, IntlProvider} from 'react-intl';
import '../locales/zh-CN'
import './config/AxiosConfig'

addLocaleData(window.appLocale.data);





class App extends React.Component {
    render() {
        console.log(styles)
        return (
            <LocaleProvider locale={appLocale.antd}>
                <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                    <Provider store={store}>
                        <BrowserRouter  history={history}>
                            <AppRoutes/>
                        </BrowserRouter >
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


ReactDOM.render(<App/>, document.getElementById("root"));