import React from 'react';
import './day.scss';

export interface dateObject  {
        label:string,
        isSelected:boolean,
        isDisabled:boolean
}


const dayRender : (date:Date,dateObject:dateObject,handleClick:(date:Date)=>void) => JSX.Element = (date,dayObject,handleClick) =>{
 return <div onClick={()=>handleClick(date)}>
           {dayObject.label}
        </div>

}

export default dayRender;