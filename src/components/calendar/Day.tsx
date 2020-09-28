import React from "react";
import { getDate } from "date-fns";
import DayRender from '../../defaultTemplate/DayRender'
export interface IDay {
    label:number,
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

    const dayObject ={
        isSelected,
        isDisabled,
        label:date.getDate()
    }

    const handleClick =() => {
        onClick(date);
    }

    return DayRender(date,dayObject,handleClick);
       

};
export default Day;