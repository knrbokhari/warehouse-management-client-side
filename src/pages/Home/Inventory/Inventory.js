import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import Products from "../Products/Products";

const Inventory = () => {
  const [products] = useProduct();

  return (
    <div className="container my-5">
      <h2 className="mb-5 text-center">Inventory Items</h2>
      <div className="row  justify-content-center">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
      <Link
        style={{ width: "200px" }}
        className="btn btn-danger fs-5 mx-auto d-block"
        to="/manageinventorie"
      >
        Manage Inventorie
      </Link>
    </div>
  );
};

export default Inventory;
