import React from 'react';
import RegistrationUI from './registration'
import {connect} from "react-redux";
import * as RegistrationAction from "./action";

export default connect(
    null,
    RegistrationAction
)(RegistrationUI)
