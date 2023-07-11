import React, { useEffect, useState } from "react";
import Stepper from "../../Common/Stepper";
import Form from "./Components/Form";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://staging.memorycherish.com/api/get-task-data.php?id=${location.pathname.replace(
        /\//g,
        ""
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error.message);
      });
  }, []);

  if (!loading)
    return (
      <div className="lg:flex justify-between">
        <Stepper />
        <Form data={data} />
      </div>
    );
};

export default Home;
