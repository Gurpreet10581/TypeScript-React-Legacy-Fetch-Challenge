import React from 'react';
import './App.css';
import Clock from './components/Clock';
// import Weather from './components/Weather';
import Location from './components/Location';


let testProp: string = 'Current Time'
let optionalProp: string = 'Have a Good Day';

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <div className="verticalCenter">
            <Location />
            <Clock testProp={testProp} optionalProp={optionalProp} />

      </div>
    </div>
  );
}


export default App;
