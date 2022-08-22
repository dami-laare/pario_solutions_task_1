import React from "react";

const Button = ({ type, label, variant, onClick }) => {
  const variants = {
    primary: "bg-gradient-to-b from-[#F2C94C] to-[#F2994A] text-gray-1",
    secondary: "text-primary-1",
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${variants[variant]} w-[15rem] py-[14px] rounded-[10px] font-bold text-[20px] hover:opacity-90 transition-all`}
    >
      {label}
    </button>
  );
};

export default Button;
