import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, SelectComp, Button } from "../../components";
import states from "../../utils/states";

const Home = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/billing");
  };
  return (
    <form className="flex flex-col gap-y-[44px]" onSubmit={submitHandler}>
      <Input type="text" label="Name" placeholder="Opara Linus Ahmed" />
      <Input
        type="email"
        label="Email Address"
        placeholder="oparalinusahmed@devmail.com"
        subText="The purchase reciept would be sent to this address"
        required
      />
      <Input type="text" label="Address 1" placeholder="Address line 1" />
      <Input type="text" label="Address 2" placeholder="Address line 2" />
      <div className="flex items-end gap-x-8">
        <div className="basis-[60%]">
          <Input type="text" label="Local Government" placeholder="Surulere" />
        </div>
        <div className="basis-[40%]">
          <SelectComp label="State" options={states} />
        </div>
      </div>
      <div className="flex gap-x-8">
        <Button type="submit" label="Next" variant="primary" />
        <Button type="button" label="Cancel Payment" variant="secondary" />
      </div>
    </form>
  );
};

export default Home;
