import React from 'react';
import Proptypes from 'prop-types';
import './styles.css';


const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont">
        <span className="extraInfoText">{`Humidity: ${humidity} %`}</span>
        <span className="extraInfoText">{`Wind: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.proptypes = {
    humidity: Proptypes.number.isRequired,
    wind: Proptypes.number.isRequired,
};



export default WeatherExtraInfo;
