import React from "react";
import Stepper from "../../Common/Stepper";
import Form from "./Components/Form";

const Home = () => {
  return (
    <div className="lg:flex justify-between">
      <Stepper />
      <Form />
    </div>
  );
};

export default Home;
