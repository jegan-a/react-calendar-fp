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
    onDayClick:()=>void,
}

const Month: React.FunctionComponent<IMonth> = ({
    month,
    year,
    showFullWeek=false,
    ...otherPros
}) => {
    const startDate = new Date(year, month - 1);
    const weeks = generateWeeksOfMonth(month, year);
    const weekList = weeks.map(weekStartDate => <Week
        key={getUniqeKeyFromDate(startDate)}
        weekStartDate={weekStartDate}
        month={month}
        year={year}
        showFullWeek={showFullWeek}
        {...otherPros}
    />)
    return <div className="month">{weekList}</div>;
}

export default Month;