import { Country } from 'country-state-city';
import React, { useState } from 'react';
import Select from 'react-select';

const transformCountryData = (countries) => {
    return countries.map(country => ({ value: country.isoCode, label: country.name }));
};

const CountrySelect = ({ setCountry }) => {
    const countryData = Country.getAllCountries();
    const options = transformCountryData(countryData);

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setCountry(selectedOption);
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
                onChange={handleCountryChange}
                value={selectedCountry}
                placeholder="Country"
                styles={customStyles}
            />
        </div>
    );
};

export default CountrySelect;