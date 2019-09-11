import React from 'react';
import classes from './Loader.module.css'
const Loader = props => (
    <div className={classes.center}>
    <div className={classes.Loader}><h2 className={classes.text}>Loader...</h2><div/><div/>
    </div>
    </div>
)
export default Loader;