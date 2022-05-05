import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="container">
      <h2 className="text-center my-5">Our Service</h2>
      <div className="row justify-content-center">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
