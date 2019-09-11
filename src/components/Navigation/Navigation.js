import React from 'react'
import classes from '../Navigation/Navigation.module.css'

const Navigation = props => {
    const cls = [
        classes.Navigation,
        'fa'
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push(classes.open)
    }
    else {
        cls.push('fa-bars')
    }

    return (
        <i className={cls.join(' ')}
        onClick={props.onToggle}
        />
    )
}
export default Navigation