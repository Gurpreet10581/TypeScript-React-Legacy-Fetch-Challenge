import React from 'react';
import Weather from './Weather';

 type acceptedProps ={

};

type LocationState ={
    temp:number,
    humidity: number,
    pressure: number,
    temp_max: number,
    temp_min:number,
    longitude: number,
    latitude: number,
   
};

class Location extends React.Component <acceptedProps,LocationState>{
    constructor (props: acceptedProps){
        super(props);
        this.state = {
            temp:0,
            humidity: 0,
            pressure: 0,
            temp_max: 0,
            temp_min:0,
            longitude: 0,
            latitude: 0,
            
           
        };
    }

    currentLocation =() =>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    longitude:position.coords.longitude,
                    latitude:position.coords.latitude
                })
            })
        }
        else{
            return "Location not found. Sorry your current location is unavailable";
        }
    }

    currentWeather=()=>{
        const apiUrl: string= 'https://api.openweathermap.org/data/2.5/weather';
        const key: string = '3a76d25d0506645d5caafa1055cacb16'

        let url =`${apiUrl}?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${key}`;

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(json => {this.setState({
                // weatherData: json,
                temp:json.main.temp,
                humidity: json.main.humidity,
                pressure: json.main.pressure,
                temp_max: json.main.temp_max,
                temp_min: json.main.temp_min,
                
            })
            console.log(json);
            })

            .catch(err => console.log(err));
        
    }

    
    componentWillMount(){
        this.currentLocation();
        this.currentWeather();
    }

    render(){
        return(
            <div className="main">
                <div className="mainDiv">
                        <h2>Longitude: {this.state.longitude}</h2>
                        <h2>Latitude: {this.state.latitude}</h2>

                        <h1>Your Current Weather Situation</h1>
                        {this.currentLocation()}
                        <Weather temp ={this.state.temp} humidity={this.state.humidity} pressure={this.state.pressure } temp_max={this.state.temp_max } temp_min={this.state.temp_min }/>
                </div>
            </div>
        )
    }
}


export default Location;