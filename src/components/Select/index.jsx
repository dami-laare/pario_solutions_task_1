import React from "react";
import { FaAsterisk } from "react-icons/fa";
import Select from "react-select";

const SelectComp = ({ label, options, required }) => {
  return (
    <div className="flex flex-col gap-y-4 w-full font-ProductSans leading-[30px]">
      <div className="flex">
        <label className="text-[20px] font-bold w-fit">{label}</label>
        {required && (
          <FaAsterisk className="inline text-[0.5rem] mt-1 ml-2 text-red-500" />
        )}
      </div>
      <Select
        options={options}
        className="max-h-[64px] min-h-[64px] w-full"
        name="states"
        id="select"
        styles={{
          control: (provided) => ({
            ...provided,
            height: "4rem",
            padding: "0 19px",
            borderRadius: "10px",
            border: "1px solid #4E598C",
          }),
        }}
        required={required}
      />
    </div>
  );
};

export default SelectComp;
