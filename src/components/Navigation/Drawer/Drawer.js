import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrap from '../../UI/Backdrop/Backdrop'

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Autification', exact: false},
    {to: '/quiz-creator', label: 'Create text', exact: false},
]


class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                   <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={() => this.props.onClose()}
                   >
                   {link.label}
                   </NavLink>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return(
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    { this.renderLinks()}
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrap onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}
export default Drawer