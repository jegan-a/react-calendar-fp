import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Month,{IMonth} from '../components/calendar/Month';
import {disableDateBetween} from '../plugins/disableDate';
import {selectedDate} from '../plugins/selectedDate';

export default {
    title: 'Component/Month',
    component: Month,
    argTypes: { onDayClick: { action: 'onDayClick' } },

} as Meta;


const MonthTemplate: Story<IMonth> = (args) => <Month {...args} />;


export const Primary = MonthTemplate.bind({});

const disableDateFn= disableDateBetween(new Date(2020,1,1),new Date(2020,1,10));
const selectedDateFn = selectedDate(new Date(2020,1,1))
const date = new Date();
const datePlugin={
    selectedDateFn,
    disableDateFn
}
Primary.args = {
    datePlugins: datePlugin,
    selectedDate: date,
    showFullWeek:true,
    month:2,
    year:2020

};


