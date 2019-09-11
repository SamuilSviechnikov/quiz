import React, {Component} from "react";
import classes from "./Layout.module.css";
import Navigation from '../../components/Navigation/Navigation'
import Drawer from '../../components/Navigation/Drawer/Drawer'


class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render(){
        return(
            <div className={classes.Layout}>
            <Drawer
                isOpen={this.state.menu}
                onClose={this.menuCloseHandler}
            />

            <Navigation
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
            />

            <main>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout