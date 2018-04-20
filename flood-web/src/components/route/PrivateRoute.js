import React from 'react';
import AppHome from '../pages/index'
import Login from '../pages/login'
import {Route} from 'react-router-dom'

export default class PrivateRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auth : false,     // 表示是否认证通过
            hasAuthed: false,  // 表示是否向服务器发送过认证请求
        };
    }

    componentDidMount() {

        authPromise().then(result => {
            if(result == true) {
                this.setState({auth:true, hasAuthed: true});
            }else {
                this.setState({auth:false, hasAuthed: true});
            }
        })
    }
}