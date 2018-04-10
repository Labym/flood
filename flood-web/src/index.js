import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import BaseLayout from './layouts/Layout'
class App extends React.Component {
    render() {
        return (
            <BaseLayout />
        )
    }

}

ReactDOM.render( <App />, document.getElementById('root'));