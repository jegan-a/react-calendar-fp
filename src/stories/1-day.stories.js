import React from 'react';
import { action } from '@storybook/addon-actions';
import Day from '../components/Day';


export default {
  title: 'Day',
};

const date = new Date();


export const day= () => <Day date={date} onClick={action('clicked')}/>;

export const selectedDay= () => <Day date={date} selected={true} onClick={action('clicked')}/>;

export const disabledDay= () => <Day date={date} disabled={true} onClick={action('clicked')}/>;
