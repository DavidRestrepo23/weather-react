/**
*----------------------------------
Destructuring
*----------------------------------- 
* const {city, country} = props;
*/

import React from 'react';
import PropTypes from 'prop-types';
const Location = ({LocationInformation:{country, city}}) => (
    <div> 
        <h1>{country} - {city}</h1> 
    </div>
);

Location.LocationInformation = PropTypes.shape({
    country: PropTypes.string,
    city: PropTypes.string,
}).isRequired;

export default Location;