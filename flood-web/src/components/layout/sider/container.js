import * as SiderActions from "./action";
import {connect} from "react-redux";
import SideMenu from './sider'
function mapStateToProps(state) {
    const {SiderReducer}=state
    const {menus}=SiderReducer.toJS()
    const {loading}=SiderReducer.toJS()
    return {
        menus:menus,
        loading:loading
    }
}

export  default  connect(
    mapStateToProps,
    SiderActions
)(SideMenu)
