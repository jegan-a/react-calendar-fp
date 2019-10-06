import React from 'react';
import { getDate } from 'date-fns'

const day = (date,seleced, disabled, onClick,  ) => {

    const selectedClass = seleced ? 'selected-day' : '';
    
    const handleClick = ()=> onClick(date);
     return (
         <div onClick={handleClick}>
            {getDate(date)}
         </div>
     )
}

export default day;

