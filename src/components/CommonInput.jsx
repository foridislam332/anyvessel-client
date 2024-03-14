
const CommonInput = ({ register, error, name, type, placeholder }) => {
    const isError = error && error[name];

    return (
        <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name, { required: true })}
            className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${isError ? 'border-red-500 focus:border-red-300' : 'focus:border-blue hover:border-blue'}`}
        />
    );
};

export default CommonInput;