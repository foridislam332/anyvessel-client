import React, { useEffect, useState } from "react";
import Select from "react-select";

const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Arabic",
    "Japanese",
    "Russian",
    "Portuguese",
    "Italian",
    "Korean",
    "Turkish",
    "Dutch",
    "Polish",
    "Swedish",
    "Vietnamese",
    "Indonesian",
    "Greek",
    "Thai",
    "Hindi",
    "Bengali",
    "Farsi",
    "Tagalog",
    "Hebrew",
    "Ukrainian",
    "Malay",
    "Czech",
    "Romanian",
    "Hungarian",
    "Danish",
    "Norwegian",
    "Finnish",
    "Slovak",
    "Catalan",
    "Croatian",
    "Serbian",
    "Bulgarian",
    "Slovenian",
    "Lithuanian",
    "Latvian",
    "Estonian",
    "Albanian",
    "Macedonian",
    "Bosnian",
    "Montenegrin",
    "Icelandic",
    "Maltese",
    "Irish",
    "Luxembourgish",
    "Welsh",
    "Basque",
    "Galician",
    "Scots Gaelic",
    "Manx",
].map((language) => ({
    value: language,
    label: language,
}));

export default function LanguagesSelect({ selectedLanguages, setSelectedLanguages }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        // When selectedLanguages change, update selectedOptions accordingly
        const options = selectedLanguages.map((language) => ({
            value: language,
            label: language,
        }));
        setSelectedOptions(options);
    }, [selectedLanguages]);

    const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
        const selectedLanguages = selected.map((option) => option.value);
        setSelectedLanguages(selectedLanguages);
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
                id="languages"
                options={languages}
                value={selectedOptions}
                onChange={handleSelectChange}
                isMulti
                placeholder="Select Languages"
                styles={customStyles}
            />
        </div>
    );
}