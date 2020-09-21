import React, { useState } from 'react';
import Day from './Day';
import { generateWeekDays } from '../../utilities/dateUtility';
import addDays from 'date-fns/addDays';
import './Week.scss'


export interface IWeek {
    weekStartDate: Date,
    isSelected: boolean,
    weekRender :() => {}
    onWeekClick:(startDate:Date,endDate:Date)=>void
}

const Week = ({
    weekStartDate,
    isSelected,
    onWeekClick,
    weekRender
}: IWeek
) => {



    const onClick = () => {
        onWeekClick(weekStartDate,addDays(weekStartDate,6));
    };

    const weekHoverclass = onWeekClick ? 'week-hover' : '';
    const selectedclassName = isSelectedWeek ? ['selected'] : '';
    const finalClassName = `week ${weekHoverclass} ${selectedclassName}`;

    const weekDays = generateWeekDays(weekStartDate);
    const dayList = weekDays.map(currentDate => {
        const shortDayName = currentDate.format('dd');
        const isSelected = selectedDate && selectedDate.isSame(currentDate, 'day');
        const isWeekEnd = isWeekEndShadow && (shortDayName === 'Sa' || shortDayName === 'Su');
        const isDisabled =
            (showOutRange && currentDate.month() !== month) ||
            (moment.isMoment(maxDate) && currentDate.isAfter(maxDate)) ||
            (moment.isMoment(minDate) && currentDate.isBefore(minDate));
        const showDay = !showOutRange && currentDate.month() !== month ? undefined : currentDate.clone();
        const data = {
            isSelected: isSelected,
            isWeekEnd: isWeekEnd,
            isDisabled: isDisabled,
            date: showDay,
            onClick: onDayClick
        };
        return <Day key={`${currentDate.getDate()}${currentDate.getMonth()}${currentDate.getFullYear()}`} {...data} />;
    });


    <div className={finalClassName}>{dayList}</div>;

}
