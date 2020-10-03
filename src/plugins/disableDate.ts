import { isBefore ,isAfter } from 'date-fns';

type IReturnType = {
    isDisabled:boolean;
}
export const disableDateBetween = (startDate: Date, endDate: Date) => {
    return (currentDate: Date): IReturnType => {
        return {
            isDisabled:isAfter(currentDate, startDate) && isBefore(currentDate, endDate)
        }
    }
}