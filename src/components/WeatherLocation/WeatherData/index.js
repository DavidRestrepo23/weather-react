import React from 'react';
import WeatherExtrainfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './styles.css';
const WeatherData = ({WeatherInformation}) => { 
    let state = WeatherInformation.state;
    return (<div className="weatherDataCont">
        <div className="weatherdataContent">
            <WeatherTemperature temperature={WeatherInformation.temperature} weatherState={state} />
            <WeatherExtrainfo humidity={WeatherInformation.humidity} wind={WeatherInformation.wind} />
        </div>
    </div>)
};


WeatherData.WeatherInformation = PropTypes.shape({
    temperature:PropTypes.number,
    state:PropTypes.string,
    humidity:PropTypes.number,
    wind: PropTypes.string,
}).isRequired;

export default WeatherData;