import { State } from 'country-state-city';
import React, { useState } from 'react';
import Select from 'react-select';

const transformCountryData = (countries) => {
    return countries.map(country => ({ value: country.isoCode, label: country.name }));
};

const StateSelect = ({ setState, country }) => {
    const stateData = State.getStatesOfCountry(country.value);
    const options = transformCountryData(stateData);

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setState(selectedOption.label);
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
                placeholder="State"
                styles={customStyles}
            />
        </div>
    );
};

export default StateSelect;