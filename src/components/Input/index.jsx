import React from "react";
import { FaAsterisk } from "react-icons/fa";

const Input = ({
  type,
  label,
  placeholder,
  required,
  subText,
  className,
  inputClass,
  value,
  onChange,
}) => {
  return (
    <div
      className={`${className} flex flex-col gap-y-4 w-full font-ProductSans leading-[30px]`}
    >
      <div className="flex">
        <label className="text-[20px] font-bold w-fit">{label}</label>
        {required && (
          <FaAsterisk className="inline text-[0.5rem] mt-1 ml-2 text-red-500" />
        )}
      </div>
      {subText && (
        <p className="text-base text-primary-2 font-normal leading-6">
          {subText}
        </p>
      )}
      <input
        type={type}
        className={`${
          inputClass && inputClass
        } input transition-all max-h-[64px] min-h-[64px] py-[17px] px-[27px] w-full border border-border-1 rounded-[10px]`}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
