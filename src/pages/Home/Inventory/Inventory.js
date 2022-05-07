import React from "react";
import useProduct from "../../../hooks/useProduct";
import Products from "../Products/Products";

const Inventory = () => {
  const [products] = useProduct();

  return (
    <div className="container my-5">
      <h2 className="mb-5 text-center">Inventory</h2>
      <div className="row mb-5 justify-content-center">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
