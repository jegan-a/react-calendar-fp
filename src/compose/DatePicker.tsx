import React, {useState} from 'react';
import Month, {IMonth} from '../components/calendar/Month'


interface Picker{
    initialMonth?:Date,
    selectedDays? : Date[] | Date 

}

type DatePicker =  IMonth & Picker;


const DatePicker:React.FC<DatePicker> = ({initialMonth =new Date(), selectedDays }) =>{

    const [viewMonth,setViewMonth] =useState(initialMonth.getMonth()+1)
    const [viewYear,setViewYear] =useState(initialMonth.getMonth()+1)
    const [selectedDate,setSelectedDate]=useState([]);

    const onDayClick = (date:Date) => {



    } 


    return (
        <Month 
        month={viewMonth}
        year={viewYear}
        onDayClick={onDayClick}
        />

    )



}

export default DatePicker;