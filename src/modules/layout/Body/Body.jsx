import React from 'react'
import classes from './Body.module.css'
import Left from './Left/Left';
import Center from './Center/Center';
import Right from './Right/Right';
const Body = () => {
    return (  
        <div className={classes.appBody}>
            <Left />
            <Center />
            <Right />
        </div>
    );
}
 
export default Body;