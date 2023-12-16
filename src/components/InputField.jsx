import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const InputField = ({
  id,
  type = "text",
  placeholder,
  handle,
  icons = null,
  required = false,
  valid = false,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue ${
          valid && "border-red-300 shadow-sm shadow-red-200"
        }`}
      >
        <input
          id={id}
          type={isShowPassword ? "text" : type}
          placeholder={placeholder}
          onChange={(e) => handle(e.target)}
          required={required}
          className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
        />

        {type === "password" ? (
          <span
            className="cursor-pointer px-3"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <LuEye /> : <LuEyeOff />}
          </span>
        ) : icons ? (
          <img className="w-4 h-4" src={icons} alt={placeholder} />
        ) : null}
      </label>
    </div>
  );
};

export default InputField;
