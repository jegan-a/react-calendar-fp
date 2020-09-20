import * as React from "react";
import Day, {IDay} from './components/Day';
import './App.scss'
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div className="App">
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!

    <Day date={new Date()} isSelected={true} isDisabled={false} handleClick={()=>{}}  />

  </h1>
  </div>
);