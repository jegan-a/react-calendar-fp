import React from "react";
import { getDate } from "date-fns";
import DayRender from '../../defaultTemplate/DayRender'
import {IMonth} from './Month';

import isSameDay from 'date-fns/isSameDay';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
export interface IDay extends IMonth {
    date: Date,
}



const Day = ({ date,datePlugins,onDayClick, ...otherPros } :IDay ) => {

    const {month,year,showFullWeek,maxDate,minDate,selectedDate}= otherPros

    const label = date.getDate();
    const isSelected = selectedDate && isSameDay(selectedDate,date)
    const isDisabled =
        (showFullWeek && date.getMonth()+1 !== month) ||
        (maxDate && isAfter(date,maxDate)) ||
        (minDate && isBefore(date,minDate));

    const isShowDate = showFullWeek && date.getMonth()+1 !== month;

    const dayProps = {
        label:label,
        isSelected: Boolean(isSelected),
        isDisabled: Boolean(isDisabled),
        date: date,
        isShowDate:Boolean(isShowDate),
    };

    const classNameList = ["day"];

    if (isSelected) {
        classNameList.push("selected-day");
    }
    if (isDisabled) {
        classNameList.push("disabled-day");
    }

    let templateVar={};
    if(datePlugins){

        for ( const datePlugin in datePlugins ){
            const fn = datePlugins[datePlugin];
            templateVar[datePlugin]=fn(date);
        }

    }



    const handleClick =() => {
        onDayClick(date);
    }

    return( <DayRender date={date} dateObject={{...dayProps,...templateVar}} handleClick={handleClick} /> )
       

};
export default Day;