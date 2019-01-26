import React from 'react';
import Proptypes from 'prop-types';



const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="WeatherExtraInfoCont d-flex justify-content-between">
        <span className="extraInfoText"><i class="fas fa-temperature-low"></i> {humidity} %</span>
        <span className="extraInfoText"><i class="fas fa-wind"></i> {wind}</span>
    </div>
);

WeatherExtraInfo.proptypes = {
    humidity: Proptypes.number.isRequired,
    wind: Proptypes.number.isRequired,
};



export default WeatherExtraInfo;
