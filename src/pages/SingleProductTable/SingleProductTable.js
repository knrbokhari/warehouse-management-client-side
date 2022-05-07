import React from "react";
import { useParams } from "react-router-dom";

const SingleProductTable = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>SingleProductTable</h2>
    </div>
  );
};

export default SingleProductTable;
