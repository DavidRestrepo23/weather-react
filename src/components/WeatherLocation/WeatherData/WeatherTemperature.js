import React from 'react';
import WeatherIcons from 'react-weathericons';
import {WeatherStates} from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';
const icons = {
    [WeatherStates.cloud]:"cloud",
    [WeatherStates.cloudy]:"cloudy",
    [WeatherStates.sun]: "day-sunny",
    [WeatherStates.rain]: "rain",
   [ WeatherStates.windy]: "windy"
};
const getWeatherIcon = (weatherState) => {
   const icon = icons[weatherState];
  if(icon)
    return <WeatherIcons className="wicon" name={icon} size="4x"></WeatherIcons>
  else
    return <WeatherIcons className="wicon" name="alien" size="4x"></WeatherIcons>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="WeatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">C°</span>
        
    </div>
);

//Validacion de los atributos de la funcion weatherTemperature

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;