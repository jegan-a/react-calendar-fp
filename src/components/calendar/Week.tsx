import React, { useState } from 'react';
import Day from './Day';
import { IMonth } from './Month';
import weekRenderDefault from '../../defaultTemplate/WeekRender';
import { generateWeekDays, getUniqeKeyFromDate } from '../../utilities/dateUtility';


//Todo Intl.DateTimeFormat()

export interface IWeek extends IMonth {
    weekStartDate: Date,
    weekRender?: (weekStartDate: Date, weekData: JSX.Element[]) => React.ReactNode
}

const Week: React.FunctionComponent<IWeek> = ({
    weekStartDate,
    weekRender,
    ...OtherProps
}
) => {
    const weekDays = generateWeekDays(weekStartDate);

    const dayList = weekDays.map(currentDate => {
        return <Day date={currentDate} key={getUniqeKeyFromDate(currentDate)} {...OtherProps} />;
    });

    const result = weekRender?  weekRender(weekStartDate, dayList) : dayList;
    return result;

}
export default Week;