import React, { useEffect, useState } from "react";
import Products from "../Products/Products";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://calm-eyrie-49116.herokuapp.com/product";
    const fetchUrl = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };
    fetchUrl();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-5 text-center">Inventory</h2>
      <div className="row mb-5 justify-content-center">
        {products.slice(0, 6).map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
