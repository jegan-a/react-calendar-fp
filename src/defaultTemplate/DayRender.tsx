import React from 'react';
import './day.scss';

export interface dateObject  {
        label:number,
        isSelected?:boolean,
        isDisabled?:boolean
}

export interface IDayRender {
        date:Date,
        dateObject:dateObject,
        handleClick:(date:Date)=>void
}

const dayRender : React.FC<IDayRender>  = ({ date,dateObject,handleClick}) =>{
        console.log('dateObject');
        console.log(dateObject);
        const classNames = {
                'day':true
        }
        const isSelected = dateObject && dateObject.isSelected;

       

 return <div className="day" onClick={()=>handleClick(date)}>
           {dateObject.label}
        </div>

}

export default dayRender;