import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = "https://calm-eyrie-49116.herokuapp.com/service";
    const fetchUrl = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setServices(data);
    };
    fetchUrl();
  }, []);

  return [services];
};

export default useServices;
