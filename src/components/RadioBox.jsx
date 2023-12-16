import { useEffect, useState } from "react";

const selectedIcon = (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11.9773"
      cy="12.5002"
      r="11.2727"
      fill="#E5F4FD"
      stroke="#1F8AF4"
      stroke-width="1.40909"
    />
    <circle cx="11.9774" cy="12.5004" r="5.98864" fill="#1F8AF4" />
  </svg>
);
const unSelectedIcon = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12.7043"
      cy="12.5002"
      r="11.2727"
      fill="#E7E8E7"
      stroke="#A9A9A9"
      stroke-width="1.40909"
    />
    <circle cx="12.7045" cy="12.5004" r="5.98864" fill="#A9A9A9" />
  </svg>
);

const RadioBox = ({
  serial,
  idName,
  labelText1,
  labelText2,
  radioValue,
  setRadioValue,
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // radioValue, setRadioValue;
    //   expertise_level: null,
    //  payroll_status: null,
    //  experience: null,
    setRadioValue({
      ...radioValue,
      [idName]: selected,
    });
  }, [selected]);
  // console.log("radioValue ", radioValue);

  return (
    <>
      <div className="flex gap-20 items-center my-2">
        <span className="w-12 h-12 flex justify-center items-center text-xl font-semibold rounded-full bg-[#1FBAFF33]">
          {serial}{" "}
        </span>
        <div className="flex gap-20 items-center">
          <div
            className={`form-control border border-[#A1C7EC] rounded-md px-8 py-3 border-2 border-dashed ${
              selected == labelText1?.value && "border-blue bg-[#1FBAFF4D]"
            }`}
          >
            <label className="label py-1.5 cursor-pointer flex gap-4 items-center">
              {selected == labelText1?.value ? (
                <span>{selectedIcon}</span>
              ) : (
                <span>{unSelectedIcon}</span>
              )}
              <span className="label-text"> {labelText1?.text} </span>
              <input
                type="radio"
                name={idName}
                className="radio hidden"
                onClick={() => setSelected(labelText1?.value)}
              />
            </label>
          </div>

          <div
            className={`form-control border border-[#A1C7EC] rounded-md px-8 py-3 border-2 border-dashed ${
              selected == labelText2?.value && "border-blue bg-[#1FBAFF4D]"
            }`}
          >
            <label className="label py-1.5 cursor-pointer flex gap-4 items-center">
              {selected == labelText2?.value ? (
                <span>{selectedIcon}</span>
              ) : (
                <span>{unSelectedIcon}</span>
              )}
              <span className="label-text">{labelText2?.text}</span>
              <input
                type="radio"
                name={idName}
                onClick={() => setSelected(labelText2?.value)}
                className="radio hidden"
                checked
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadioBox;
