import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <div
      className={`w-full flex gap-x-16 text-[24px] font-bold text-gray-2 border-b border-gray-2`}
    >
      <div
        className={`${
          location.pathname === "/" &&
          "border-b-8 border-active-1 text-active-1"
        }  p-4 min-w-fit transition-all`}
      >
        Personal Info
      </div>
      <div
        className={`${
          location.pathname === "/billing" &&
          "border-b-8 border-active-1 text-active-1"
        }  p-4 min-w-fit transition-all`}
      >
        Billing Info
      </div>
      <div
        className={`${
          location.pathname === "/payment" &&
          "border-b-8 border-active-1 text-active-1"
        }  p-4 min-w-fit transition-all`}
      >
        {" "}
        Confirm Payment
      </div>
    </div>
  );
};

export default Tabs;
