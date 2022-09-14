import React from "react";
import classes from "./TimetableCreater.module.css"
const TimetableCreater = () => {
    return (  
        <div className={classes.timetableCreater}>
            <div className={classes.header}>
                <p><font>Выделить время для ваших целей</font></p>
            </div>
            <div className={classes.text}>
                <p><font>Чтобы находить время на достижение ваших задач важно понимать когда и что вы можете делать. Выберите промежутки времени при помощи наших рекомендаций на сон, работу и саморазвитие</font></p>
            </div>
            <div className="">
                
            </div>
        </div>
    );
}
 
export default TimetableCreater;