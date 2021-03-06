import * as React from "react";
import './App.scss'
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <div className="App">
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
  </div>
);