import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="gap-y-[70px] flex flex-col">
      <div
        style={{ boxShadow: "0px 10px 15px rgba(33, 30, 67, 0.08)" }}
        className="w-full h-fit flex flex-col rounded-[10px] overfolw-hidden"
      >
        <div className="w-full rounded-t-[10px] bg-[#2F80ED] flex justify-between items-center h-[70px] pr-[130px] pl-[80px] text-white text-[20px] font-bold">
          <span>Item Name</span>
          <span>&#8358; Price</span>
        </div>
        <div className="flex flex-col gap-y-[40px] px-[40px] py-[40px] rounded-b-[10px] bg-white">
          <div className="border-b gap-y-[40px] flex flex-col pb-[40px]">
            <div className="w-full flex justify-between items-center pl-[40px] pr-[90px]  text-primary-1 text-[20px]">
              <span>Data science and usability</span>
              <span className="font-bold">
                {(50000).toLocaleString("en-US")}.00
              </span>
            </div>
            <div className="w-full bg-white flex justify-between items-center pl-[40px] pr-[90px]  text-primary-1 text-[20px]">
              <span>Shipping</span>
              <span className="font-bold">0.00</span>
            </div>
          </div>
          <div className="px-[20px]">
            <div className="w-full border border-primary-2 rounded-[5px] flex justify-between items-center py-[14px] pl-[20px] pr-[70px]  text-primary-1 text-[20px]">
              <span>Total</span>
              <span className="font-bold">
                {(50000).toLocaleString("en-US")}.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-8">
        <Button
          type="button"
          onClick={() => navigate("/success")}
          label="Pay"
          variant="primary"
        />
        <Button type="button" label="Cancel Payment" variant="secondary" />
      </div>
    </div>
  );
};

export default Payment;
