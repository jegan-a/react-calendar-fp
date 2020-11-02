import * as React from "react";
import Day, {IDay} from './components/calendar/Day';
import './App.scss'
import DatePicker from '../src/compose/DatePicker'
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div className="App">
  <h1>
    <DatePicker date={new Date()} />
  </h1>
  </div>
);