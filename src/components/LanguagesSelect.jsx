import { useState } from "react";

const deleteIcon = (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.77 6.36L14.77 0.360001C14.676 0.247119 14.5582 0.156339 14.4252 0.0941175C14.2921 0.0318965 14.1469 -0.000237263 14 1.31887e-06H3C2.20435 1.31887e-06 1.44129 0.316072 0.87868 0.878681C0.316071 1.44129 0 2.20435 0 3V11C0 11.7957 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H14C14.1469 14.0002 14.2921 13.9681 14.4252 13.9059C14.5582 13.8437 14.676 13.7529 14.77 13.64L19.77 7.64C19.9197 7.46031 20.0016 7.23386 20.0016 7C20.0016 6.76615 19.9197 6.53969 19.77 6.36ZM13.53 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H13.53L17.7 7L13.53 12ZM10.71 4.29C10.617 4.19627 10.5064 4.12188 10.3846 4.07111C10.2627 4.02034 10.132 3.9942 10 3.9942C9.86799 3.9942 9.73728 4.02034 9.61542 4.07111C9.49356 4.12188 9.38296 4.19627 9.29 4.29L8 5.59L6.71 4.29C6.5217 4.1017 6.2663 3.99591 6 3.99591C5.7337 3.99591 5.4783 4.1017 5.29 4.29C5.1017 4.4783 4.99591 4.7337 4.99591 5C4.99591 5.13186 5.02188 5.26243 5.07234 5.38425C5.1228 5.50607 5.19676 5.61676 5.29 5.71L6.59 7L5.29 8.29C5.19627 8.38296 5.12188 8.49356 5.07111 8.61542C5.02034 8.73728 4.9942 8.86799 4.9942 9C4.9942 9.13201 5.02034 9.26272 5.07111 9.38458C5.12188 9.50644 5.19627 9.61704 5.29 9.71C5.38296 9.80373 5.49356 9.87812 5.61542 9.92889C5.73728 9.97966 5.86799 10.0058 6 10.0058C6.13201 10.0058 6.26272 9.97966 6.38458 9.92889C6.50644 9.87812 6.61704 9.80373 6.71 9.71L8 8.41L9.29 9.71C9.38296 9.80373 9.49356 9.87812 9.61542 9.92889C9.73728 9.97966 9.86799 10.0058 10 10.0058C10.132 10.0058 10.2627 9.97966 10.3846 9.92889C10.5064 9.87812 10.617 9.80373 10.71 9.71C10.8037 9.61704 10.8781 9.50644 10.9289 9.38458C10.9797 9.26272 11.0058 9.13201 11.0058 9C11.0058 8.86799 10.9797 8.73728 10.9289 8.61542C10.8781 8.49356 10.8037 8.38296 10.71 8.29L9.41 7L10.71 5.71C10.8037 5.61704 10.8781 5.50644 10.9289 5.38458C10.9797 5.26272 11.0058 5.13201 11.0058 5C11.0058 4.86799 10.9797 4.73728 10.9289 4.61542C10.8781 4.49357 10.8037 4.38296 10.71 4.29Z"
      fill="currentColor"
    />
  </svg>
);

const LanguagesSelect = ({ selectedLanguages, setSelectedLanguages }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focusedSuggestion, setFocusedSuggestion] = useState(null);

  // Sample list of languages
  const languageList = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
  ];

  const handleInputChange = (e) => {
    const newInputValue = e.target.value.toLowerCase();
    setInputValue(newInputValue);
    const filteredLanguages = languageList.filter((language) =>
      language.toLowerCase().includes(newInputValue)
    );
    setSuggestions(filteredLanguages);
  };

  const handleSuggestionClick = (language) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
      setInputValue("");
      setSuggestions([]);
    }
  };

  const handleRemoveLanguage = (language) => {
    const updatedLanguages = selectedLanguages.filter(
      (lang) => lang !== language
    );
    setSelectedLanguages(updatedLanguages);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      // Handle up and down arrow keys for suggestion navigation
      e.preventDefault();
      const index =
        focusedSuggestion !== null
          ? (focusedSuggestion +
              (e.key === "ArrowUp" ? -1 : 1) +
              suggestions.length) %
            suggestions.length
          : 0;
      setFocusedSuggestion(index);
    } else if (e.key === "Enter") {
      // Handle Enter key for adding selected suggestion
      if (focusedSuggestion !== null) {
        handleSuggestionClick(suggestions[focusedSuggestion]);
      }
    }
  };

  return (
    <div className="relative">
      {/* <label
        htmlFor="languages"
        className="flex items-center flex-col border-midBlue border rounded-[10px] overflow-hidden pr-2"
      >
        <input
          id="languages"
          type="text"
          className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue "
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Languages spoken on board"
        />
      </label>

      {suggestions.length > 0 && (
        <div className="absolute left-0 top-10 border border-x-midBlue bg-white backdrop-blur-md p-2 rounded">
          <div>
            {suggestions.map((language, index) => (
              <div key={index} onClick={() => handleSuggestionClick(language)}>
                {language}
              </div>
            ))}
          </div>
        </div>
      )} */}

      <label
        htmlFor="languages"
        className="flex items-center flex-col border-midBlue border rounded-[10px] overflow-hidden pr-2"
      >
        <input
          id="languages"
          type="text"
          className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue "
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Languages spoken on board"
        />
      </label>

      {suggestions.length > 0 && (
        <div className="absolute left-0 top-10 border border-x-midBlue bg-white backdrop-blur-md p-2 rounded">
          <div>
            {suggestions.map((language, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(language)}
                className={index === focusedSuggestion ? "bg-gray-200" : ""}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedLanguages.length > 0 && (
        <div
          title="Shift + Scrolling"
          className="top-1/2 -translate-y-1/2 right-0.5 p-2 absolute md:col-span-2 lg:col-span-1 flex items-center justify-between gap-2 border-midBlue border rounded-[10px] overflow-hidden bg-white max-w-[150px] overflow-x-auto no-scrollbar"
        >
          {selectedLanguages.map((language, index) => (
            <div
              key={index}
              className="inline-flex gap-1 items-center justify-between group transition-all duration-300"
            >
              <span>{language}</span>
              <button
                className="invisible group-hover:visible"
                onClick={() => handleRemoveLanguage(language)}
              >
                <span className="rotate-180">{deleteIcon}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesSelect;
