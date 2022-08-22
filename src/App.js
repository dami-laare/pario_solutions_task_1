import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Tabs } from "./components";
import Billing from "./pages/Billing";
import Payment from "./pages/Payment";
import Success from "./pages/Success";

function App() {
  const location = useLocation();
  return (
    <div
      style={
        location.pathname === "/success" ? { backgroundSize: "cover" } : {}
      }
      id="main"
      className="w-full h-fit flex flex-col items-center justify-center py-[10rem] gap-y-16"
    >
      <div
        style={location.pathname === "/success" ? { display: "none" } : {}}
        className="flex flex-col max-w-[710px] w-[50%] gap-y-16"
      >
        <h1 className="text-[36px] block w-full text-primary-1 font-bold">
          Complete your Purchase
        </h1>
        <Tabs />
      </div>
      <div className="max-w-[710px] w-[50%]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
