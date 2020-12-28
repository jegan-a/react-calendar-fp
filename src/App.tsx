import * as React from "react";
import Day, {IDay} from './components/calendar/Day';
import './App.scss'
import DatePicker from '../src/compose/DatePicker'
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = () => (
  <div className="App">
  
    <DatePicker date={new Date()} />
  </div>
);