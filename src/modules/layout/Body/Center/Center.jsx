import React from 'react';
import TimetableCreater from '../../../UI/TimetableCreater/TimetableCreater';
import classes from "./Center.module.css"
const Center = () => {
    return ( 
        <div className={classes.center}>
            <TimetableCreater />
        </div>
    );
}
 
export default Center;