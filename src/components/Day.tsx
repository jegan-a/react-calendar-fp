import React from "react";
import { getDate } from "date-fns";
import "./day.scss";

export interface IDay {
    date: Date,
    isSelected:boolean,
    isDisabled:boolean,
    handleClick:React.MouseEvent<HTMLDivElement>
}



const Day = ({ date, isSelected, isDisabled, handleClick } :IDay ) => {
    const classNameList = ["day"];

    if (isSelected) {
        classNameList.push("selected-day");
    }
    if (isDisabled) {
        classNameList.push("disabled-day");
    }
    const classNames = classNameList.join(" ");

    return (
        <div className={classNames} onClick={()=>handleClick}>
            {getDate(date)}
        </div>
    );
};
export default Day;
