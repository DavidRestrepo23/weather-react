import React from 'react';
import WeatherIcons from 'react-weathericons';
import {WeatherStates} from '../../../constants/weathers';
import PropTypes from 'prop-types';

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
    return <WeatherIcons className="wicon" name={icon} size="2x"></WeatherIcons>
  else
    return <WeatherIcons className="wicon" name="alien" size="2x"></WeatherIcons>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="WeatherTemperatureCont">
        <h3 class="heading my-5">{getWeatherIcon(weatherState)}</h3>
        <p class="temp">
            <span class="temp-value">{temperature}</span>
            <span class="deg">°</span>
            <a href="javascript:;"><span class="temp-type">C</span></a>
        </p>
    </div>
);

//Validacion de los atributos de la funcion weatherTemperature

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;