import React, {FunctionComponent} from 'react';


type acceptedProps ={
    temp:number,
    humidity: number,
    pressure: number,
    temp_max: number,
    temp_min:number,

   
};

const Weather: FunctionComponent <(acceptedProps)> = props =>{
    
    return(
        <div>
                <h3 >Temp in Fahrenheit: {props.temp}</h3>
                <h3>Humidity in air g.kg-1: {props.humidity}</h3>
                <h3>pressure: {props.pressure}</h3>
                <h3> Max-Temp Fahrenheit: {props.temp_max}</h3>
                <h3> Min-Temp Fahrenheit: {props.temp_min}</h3>
        </div>
    )
}

export default Weather;