import addDays from 'date-fns/addDays';
import isAfter from 'date-fns/isAfter';

export const generateWeekDays = (startDate: Date, dateList: Date[] =[] ): Date[] => {
    const endDate = addDays(startDate,6);
    const currentDate = dateList.length === 0 ? startDate : addDays(dateList[dateList.length - 1],1);
    if (isAfter(currentDate,endDate)) {
        return dateList;
    } else {
        return generateWeekDays(startDate, [...dateList, currentDate]);
    }
};