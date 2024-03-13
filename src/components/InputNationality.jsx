import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function InputNationality({ setNationality }) {
    const [countryData, setCountryData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                // Extracting country names from the data
                const countries = data.map((country) => ({
                    value: country.name.common,
                    label: country.name.common,
                }));
                setCountryData(countries);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });
    }, []);

    const handleSelectChange = (selected) => {
        setSelectedOption(selected);
        const selectedCountry = countryData.find(
            (country) => country.value === selected.value
        );
        if (selectedCountry) {
            // You can map country names to nationalities here
            setNationality(selectedCountry.value); // Here, setting nationality as the country name
        } else {
            setNationality("");
        }
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
                id="nationality"
                options={countryData}
                value={selectedOption}
                onChange={handleSelectChange}
                placeholder="Nationality"
                styles={customStyles}
            />
        </div>
    );
}
