import React from 'react';
import './week.scss';

export interface IWeekRender {
    (startDate: Date, weekData: JSX.Element[]): JSX.Element
}

const weekRender: IWeekRender = (startDate, weekData) => {
    return {weekData}
    

}

export default weekRender;