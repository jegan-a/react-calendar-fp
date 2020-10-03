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
    showFullWeek:boolean,
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
    console.log(weeks);
    const weekList = weeks.map(weekStartDate => <Week
        key={getUniqeKeyFromDate(weekStartDate)}
        weekStartDate={weekStartDate}
        month={month}
        year={year}
        showFullWeek={showFullWeek}
        {...otherPros}
    />)
    return <div className="month">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tues</div>
        <div>Wed</div>
        <div>Thus</div>
        <div>Fri</div>
        <div>Sat</div>
        {weekList}
        
        </div>;
}

export default Month;