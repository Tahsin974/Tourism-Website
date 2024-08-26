import axios from "axios";
import { useEffect, useState } from "react";

const usePlans = (option) => {
  const [plans, setPlans] = useState([]);
  const baseURL = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${baseURL}/${option}`).then((res) => {
      console.log(res.data);
      setPlans(res.data)
    });
  }, []);
  return [
    plans
  ];
};

export default usePlans;
