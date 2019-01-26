//First component;
import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {WeatherStates} from './../../constants/weathers';

/**
 * ------------------------------------------------
 * Arrow function is equals to normal function;
 * -------------------------------------------------
    function WeatherLocation(){
        return <div><h1>Weather Function</h1></div>;
    }
 */

const WeatherInformation = {
    humidity:84,
    temperature: 19,
    state:WeatherStates.sun,
    wind:'6 km/h'
};


const LocationInformation = {
    country:'Colombia',
    city: 'Medellín',
};



class WeatherLocation extends Component {
    
    //El constructor es la primera parte del ciclo de vida del componente.
    constructor(){
        super();
        //state: es el estado con que se va a inicializar el componente, con sus respectivos param.
        this.state = {
            LocationInformation,
            WeatherInformation
        };
    }

    handleUpdateClick = () => {
        let UpdateInfoLocation = {
            country:'Argentina',
            city: 'Buenos Aires',
        };
        let UpdateInfoWeather = {
            humidity:8,
            temperature: 24,
            state:WeatherStates.windy,
            wind:'5 km/h'
        };
        this.setState({
            LocationInformation:UpdateInfoLocation,
            WeatherInformation:UpdateInfoWeather
        });
    };

    render(){
        const location = this.state.LocationInformation;
        const weather = this.state.WeatherInformation;
        return (
            <div>
                <Location LocationInformation={location}></Location>
                <WeatherData WeatherInformation={weather}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update!</button>
            </div>
        );
    }  
};



export default WeatherLocation;