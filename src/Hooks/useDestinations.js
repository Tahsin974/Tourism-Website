import axios from "axios";
import { useEffect, useState } from "react";

const usePlans = (option) => {
  const [plans, setPlans] = useState([]);
  const baseURL = "https://tourism-website-server-nine.vercel.app";
  useEffect(() => {
    axios.get(`${baseURL}/${option}`).then((res) => {
      setPlans(res.data)
    });
  }, []);
  return [
    plans
  ];
};

export default usePlans;
