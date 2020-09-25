import React from 'react';
import './App.css';
import Clock from './components/Clock';
// import Weather from './components/Weather';
import Location from './components/Location';
import NytChallenge from './components/NytChallenge';


let testProp: string = 'Current Time'
let optionalProp: string = 'Have a Good Day';

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <div className="verticalCenter">
            <Location />
            <Clock testProp={testProp} optionalProp={optionalProp} />
            <NytChallenge />

      </div>
    </div>
  );
}


export default App;
