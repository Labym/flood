import React from 'react';

import {Route} from 'react-router-dom'
import {injectIntl, intlShape} from "react-intl";
import PropTypes from "prop-types";
import {Form} from "antd/lib/index";

class PrivateRouteUI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auth : false,     // 表示是否认证通过
            hasAuthed: false,  // 表示是否向服务器发送过认证请求
        };
    }

    componentDidMount() {

        // authPromise().then(result => {
        //     if(result == true) {
        //         this.setState({auth:true, hasAuthed: true});
        //     }else {
        //         this.setState({auth:false, hasAuthed: true});
        //     }
        // })
    }

    render(){
        let { authorized }= this.props
        return(
            <Route {...rest} render={(props) => (
                authorized === true
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )} />
        )
    }
}

PrivateRouteUI.propTypes={
    authorized: PropTypes.bool.isRequired
}


export default PrivateRouteUI