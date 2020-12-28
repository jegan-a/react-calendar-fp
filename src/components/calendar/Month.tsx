import React, { useState } from 'react';
import Week from './Week';
import { generateWeeksOfMonth ,getUniqeKeyFromDate } from '../../utilities/dateUtility';
import './month.scss';


export interface IMonth {
    minDate?: Date,
    maxDate?: Date,
    selectedDate?:Date,
    month:number,
    year:number,
    showFullWeek?:boolean,
    datePlugins?:{
        [key:string]:(date:Date)=>void
    }
    onDayClick:(date:Date)=>void,
}

const Month: React.FunctionComponent<IMonth> = ({
    month,
    year,
    showFullWeek=false,
    ...otherPros
}) => {
    const startDate = new Date(year, month - 1);
    const weeks = generateWeeksOfMonth(startDate.getMonth(), startDate.getFullYear());
    const weekList = weeks.map(weekStartDate => <Week
        key={getUniqeKeyFromDate(weekStartDate)}
        weekStartDate={weekStartDate}
        month={month}
        year={year}
        showFullWeek={showFullWeek}
        {...otherPros}
    />)
    return <div className="month">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tues</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thus</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>
        {weekList}
        
        </div>;
}

export default Month;