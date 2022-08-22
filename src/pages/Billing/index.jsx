import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, SelectComp, Button } from "../../components";

const cards = [
  {
    value: "Mastercard",
    label: "Mastercard",
  },
  {
    value: "Visa",
    label: "Visa",
  },
];

const Billing = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/payment");
  };
  return (
    <form className="flex flex-col gap-y-[44px]" onSubmit={submitHandler}>
      <Input
        type="text"
        label="Name on Card"
        placeholder="Opara Linus Ahmed"
        required
      />
      <SelectComp label="Card Type" options={cards} required />
      <div className="flex gap-x-10">
        <Input
          type="text"
          label="Card details"
          placeholder="1234  5678  9201  1213"
          className="basis-[55%]"
          inputClass="tracking-[5px]"
          required
        />
        <Input
          className="basis-[19%]"
          type="text"
          label="Expiry date"
          placeholder="01/01"
          inputClass="tracking-[5px]"
          required
        />
        <Input
          className="basis-[15%]"
          type="text"
          label="CVV"
          inputClass="tracking-[5px]"
          placeholder="123"
          required
        />
      </div>
      <div className="flex gap-x-8">
        <Button type="submit" label="Next" variant="primary" />
        <Button type="button" label="Cancel Payment" variant="secondary" />
      </div>
    </form>
  );
};

export default Billing;
