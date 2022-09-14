import React from 'react'
import classes from "./Header.module.css"

import generalLogo from '../../../media/logo.png'

const Header = () => {
    return ( 
        <div className={classes.header}>
             <img src={generalLogo} className={classes.image}/>
        </div>
     );
}
 
export default Header;