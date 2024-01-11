export default function ButtonPrimary({
  children,
  onClick,
  type = "button",
  btnStyle,
}) {
  return (
    <>
      <button
        type="type"
        onClick={onClick}
        className={`bg-blue text-white font-light py-2 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 ${btnStyle}`}
      >
        {children}
      </button>
    </>
  );
}
