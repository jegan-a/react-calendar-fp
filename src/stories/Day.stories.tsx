import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import  Day, { IDay } from '../components/calendar/Day';

export default {
  title: 'Component/Day',
  component: Day,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


export const Primary = () =>{
const date= new Date();
return <Day date={date} isSelected={true} isDisabled={false} onClick={()=>{}} />


}


