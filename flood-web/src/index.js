import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import {increaseAction} from  './actions'
import styles  from './index.less'
import { Provider,connect  } from 'react-redux'
import store from './reducers'

import SiderMenu from './components/sider/SiderBar'

class App extends React.Component {
    render() {
        console.log(styles)
        const { value, onIncreaseClick } = this.props
        return (

                    <SiderMenu />

        )
    }
}
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

const CApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

class VApp extends React.Component {
    render() {
        return (
           <Provider store={store}>
               <CApp />
           </Provider>
        )
    }
}

ReactDOM.render(<VApp/>, document.getElementById('root'));