import React, { useState } from 'react';
import Day from './Day';
import {IMonth} from './Month';

import { generateWeekDays,getUniqeKeyFromDate } from '../../utilities/dateUtility';
import isSameDay from 'date-fns/isSameDay';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';

import './Week.scss'

//Todo Intl.DateTimeFormat()

export interface IWeek extends IMonth {
    weekStartDate: Date,
    weekRender?: () => {}
}

const Week: React.FunctionComponent<IWeek> = ({
    weekStartDate,
    weekRender,
    ...OtherProps
}
) => {
    const weekDays = generateWeekDays(weekStartDate);
    const {selectedDate,month,year,showFullWeek,maxDate,minDate,onDayClick} =OtherProps;

    const dayList = weekDays.map(currentDate => {
        const label = currentDate.getDate();
        const isSelected = selectedDate && isSameDay(selectedDate,currentDate);
        const isDisabled =
            (showFullWeek && currentDate.getMonth()+1 !== month) ||
            (maxDate && isAfter(currentDate,maxDate)) ||
            (minDate && isBefore(currentDate,minDate));

        const isShowDate = showFullWeek && currentDate.getMonth()+1 !== month;
        const dayProps = {
            label:label,
            isSelected: isSelected,
            isDisabled: isDisabled,
            date: currentDate,
            isShowDate:isShowDate,
            onClick: onDayClick
        };
        return <Day key={getUniqeKeyFromDate(currentDate)} {...dayProps} />;
    });


    return <div className={''}>{dayList}</div>;

}
export default Week;