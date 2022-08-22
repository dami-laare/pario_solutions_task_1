import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Success = () => {
  return (
    <div
      className="w-full flex flex-col py-[70px] px-[3rem] gap-y-8 bg-white rounded-[10px]"
      style={{ boxShadow: "0px 6px 10px rgba(33, 30, 67, 0.08)" }}
    >
      <div
        className="w-[84px] h-[84px] rounded-[50%] text-green-500 text-[3rem] self-center flex items-center justify-center"
        style={{ boxShadow: "0px 6px 10px rgba(33, 30, 67, 0.08)" }}
      >
        <FaCheck className="inline" />
      </div>
      <h1 className="text-primary-1 font-bold text-[3rem]">
        Purchase Completed
      </h1>
      <span className="block w-full">
        Please check your email for details concerning this transaction
      </span>
      <Link to="/" className="underline text-active-1 block w-full">
        Return Home
      </Link>
    </div>
  );
};

export default Success;
