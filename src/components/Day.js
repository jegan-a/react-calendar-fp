import React from 'react';
import { getDate } from 'date-fns'
import './day.scss';

const day = ({date,selected, disabled, onClick}) => {
    
    
    
    const classNameList = ['day'];
    
    if (selected) {
        classNameList.push('selected-day');
    }
    if (disabled) {
        classNameList.push('disabled-day');
    }
    const classNames = classNameList.join(' ');

    const handleClick = ()=> onClick(date);
     return (
         <div className={classNames} onClick={handleClick}>
            {getDate(date)}
         </div>
     )
}
export default day;