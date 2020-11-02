import React, {useState} from 'react';
import Month, {IMonth} from '../components/calendar/Month'

type 


const DatePicker:React.FC<IMonth> = ({initialMonth =new Date() }) =>{

    const [viewMonth,setViewMonth] =useState(initialMonth.get)



    return (
        <Month 
        month={month}
        year={year}
        />

    )



}

export default DatePicker;