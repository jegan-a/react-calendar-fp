import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Month from '../components/calendar/Month';
import {plugin} from '../plugins/plugin';
import {disableDateBetween} from '../plugins/disableDate';

export default {
    title: 'Component/Month',
    component: Month,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;


export const Primary = () => {
    const date = new Date();


    const disableDateBetween(new Date(2020,3,1),new Date(2020,3,1));
    
    return <Month selectedDate={date} onDayClick={()=>{}} showFullWeek={true} month={2} year={2020} />
}

