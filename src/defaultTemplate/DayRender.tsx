import React from 'react';
import './day.scss';

export interface dateObject  {
        label:number,
        isSelected:boolean,
        isDisabled:boolean
}

export interface IDayRender {
        (date:Date,dateObject:dateObject,handleClick:(date:Date)=>void):JSX.Element
}

const dayRender : IDayRender  = (date,dayObject,handleClick) =>{
 return <div className="day" onClick={()=>handleClick(date)}>
           {dayObject.label}
        </div>

}

export default dayRender;