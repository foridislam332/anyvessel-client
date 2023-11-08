const InputField = ({ id, type = "text", placeholder, register, icons }) => {
  return (
    <div>
      <label
        htmlFor="full_name"
        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-105 focus-within:shadow-md focus-within:shadow-midBlue"
      >
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
        />
        <img src={icons} alt={placeholder} />
      </label>
    </div>
  );
};

export default InputField;
