import addDays from 'date-fns/addDays';
import isAfter from 'date-fns/isAfter';
import startOfMonth from 'date-fns/startOfMonth'
import startOfWeek from 'date-fns/startOfWeek'
import endOfMonth from 'date-fns/endOfMonth';


export const generateWeekDays = (startDate: Date, dateList: Date[] = []): Date[] => {
    const endDate = addDays(startDate, 6);
    const currentDate = dateList.length === 0 ? startDate : addDays(dateList[dateList.length - 1], 1);
    if (isAfter(currentDate, endDate)) {
        return dateList;
    } else {
        return generateWeekDays(startDate, [...dateList, currentDate]);
    }
};


export const generateWeeksOfMonth = (month: number, year: number, weekStartList: Date[] = []): Date[] => {
    const monthStartDate = startOfMonth(new Date(year,month));
    const startDateOfWeek = weekStartList.length === 0 ?  startOfWeek(monthStartDate) : addDays(weekStartList[weekStartList.length - 1],6);
    const monthEndDate = endOfMonth(monthStartDate);
    if (isAfter(startDateOfWeek,monthEndDate)) {
        return weekStartList;
    } else {
        return generateWeeksOfMonth(month, year, [...weekStartList, startDateOfWeek]);
    }
};

export const getUniqeKeyFromDate = (date: Date): string => {
    return `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
} 