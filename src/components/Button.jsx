import nextArrow from "/carousel/next.svg";

const Button = ({ label, white, className, readMore }) => {
  return (
    <button
      className={`${
        white
          ? "bg-transparent border-[1px] border-[#458FF6] text-[#458FF6]"
          : "bg-[#458FF6] text-white"
      } ${className ? "max-w-40 max-sm:mx-auto" : ""} ${
        readMore ? "text-left absolute border-none px-0 py-0" : ""
      } button flex items-center justify-center rounded-full font-semibold`}
    >
      {label}
      {readMore ? (
        <img src={nextArrow} width={20} height={20} className="ml-2" />
      ) : null}
    </button>
  );
};

export default Button;
