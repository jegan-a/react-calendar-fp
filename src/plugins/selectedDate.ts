import { isBefore ,isAfter ,isSameDay } from 'date-fns';
type ISelectedDate = {
    (selectedDate: Date[]):(currentDate: Date)=>{isSelectedDate:boolean};
    (selectedDate: Date):(currentDate: Date)=>{isSelectedDate:boolean};
    
}

  export const selectedDate:ISelectedDate = (selectedDate:Date|Date[]) => {
    return (currentDate: Date): {isSelectedDate:boolean} => {
        if( Array.isArray (selectedDate)){
            return {
                isSelectedDate:isSameDay(currentDate, new Date()) 
            }
        }else if( selectedDate instanceof Date){
            return {
                isSelectedDate:isSameDay(currentDate, selectedDate) 
            }
        }else{
            return {
                isSelectedDate:isSameDay(currentDate, selectedDate) 
            }
        }
        
       
    }
}


