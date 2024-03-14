import { City } from 'country-state-city';
import React, { useState } from 'react';
import Select from 'react-select';

const transformCityData = (cityData) => {
    return cityData.map(city => ({ value: city.countryCode, label: city.name }));
};

const CitySelect = ({ setCity, country }) => {
    const cityData = City.getCitiesOfCountry(country?.value);
    const options = transformCityData(cityData);

    const [selectedCity, setSelectedCity] = useState('');

    const handleChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        setCity(selectedOption.label);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderColor: '#A1C7EC',
            borderRadius: '10px',
            padding: '3px',
            background: 'transparent'
        }),
    };
    return (
        <div>
            <Select
                options={options}
                onChange={handleChange}
                value={selectedCity}
                placeholder="City"
                styles={customStyles}
            />
        </div>
    );
};

export default CitySelect;