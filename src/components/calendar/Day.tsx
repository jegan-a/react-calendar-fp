import React from "react";
import { getDate } from "date-fns";
import "./day.scss";

export interface IDay {
    label:string,
    date: Date,
    isSelected:boolean,
    isDisabled:boolean,
    onClick:(date:Date)=>void
}



const Day = ({ date, isSelected, isDisabled, onClick } :IDay ) => {
    const classNameList = ["day"];

    if (isSelected) {
        classNameList.push("selected-day");
    }
    if (isDisabled) {
        classNameList.push("disabled-day");
    }
    const classNames = classNameList.join(" ");

    const handleClick =() => {
        onClick(date);
    }

    return (
        <div className={classNames} onClick={handleClick}>
            {getDate(date)}
        </div>
    );
};
export default Day;
