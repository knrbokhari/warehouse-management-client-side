import React from "react";
import { useParams } from "react-router-dom";
import useOneProduct from "../../hooks/useOneProduct";

const UpdateInventory = () => {
  let { productId } = useParams();
  const [product, setProduct] = useOneProduct(productId);
  const { _id, image, name, discription, quantity, supplierName, price } =
    product;

  const handleUpdateQuantity = () => {};

  //
  const handleRestock = () => {
    const name = prompt("prompt - Please enter your name");
    if (!isNaN(name)) {
      console.log(name);
    } else {
      alert("please give a number");
    }
  };

  //
  return (
    <div className="container">
      <h2 className="text-center my-5">UpdateInventory</h2>

      <div className="row justify-content-center align-items-center">
        <div className="col-11 col-sm-6">
          <img src={image} alt="" width="100%" />
        </div>
        <div className="col-11 col-sm-6">
          <p>Id: {_id}</p>
          <p>name: {name}</p>
          <p>discription: {discription}</p>
          <p>quantity: {quantity}</p>
          <p>supplierName: {supplierName}</p>
          <p>Price: ${price}</p>
          <div className="d-flex">
            <button onClick={handleUpdateQuantity}>Delivered</button>
            <button onClick={handleRestock}>restock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
