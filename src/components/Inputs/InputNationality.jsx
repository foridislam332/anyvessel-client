import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function InputNationality({ nationality, setNationality }) {
  const [searchingData, setSearchingData] = useState([]);
  const [Input, setInput] = useState([]);
  const [showName, setShowName] = useState(nationality?.name?.common);

  useEffect(() => {
    if (Input?.length) {
      console.log("Input 2", Input);
      const api = `https://restcountries.com/v3.1/name/${Input}`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          setSearchingData(data);
        })
        .catch((err) => {
          // console.log("err -> ", err)
        });
    }
  }, [Input]);

  const handleSelectedNationality = (value) => {
    setShowName("");
    const { flags, name, continents, timezones } = value;
    setNationality({ flags, name, continents, timezones });
    setSearchingData([]);
    setShowName(name?.common);
  };

  return (
    <>
      <div>
        <label
          htmlFor="nationality2"
          className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue"
        >
          <input
            id="nationality2"
            placeholder="Nationality"
            defaultValue={showName}
            value={showName}
            onChange={(e) => {
              setShowName(e.target.value);
              setInput(e.target.value);
            }}
            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
          />
          <IoIosArrowDown />
        </label>

        <div className="relative">
          {searchingData?.length ? (
            <div className="shadow-lg shadow-blue/20 p-3 bg-white rounded-lg absolute top-0 left-0 overflow-y-scroll max-h-[150px] z-50">
              <ul>
                {searchingData.map((item, idx) => (
                  <li
                    className="p-2 hover:bg-blue/10 cursor-pointer rounded-md capitalize"
                    key={idx}
                    onClick={() => handleSelectedNationality(item)}
                  >
                    {item?.name?.common}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
