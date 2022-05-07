import React from "react";
import { useParams } from "react-router-dom";
import useOneProduct from "../../hooks/useOneProduct";

const UpdateInventory = () => {
  let { productId } = useParams();
  const [product] = useOneProduct(productId);
  const { _id, image, name, discription, quantity, supplierName, price, sold } =
    product;

  // Update Quantity
  const handleUpdateQuantity = () => {};

  // Restock product
  const handleRestock = () => {
    const restock = prompt("update Your stock");
    if (!isNaN(restock)) {
      console.log(restock);
      const updateStock = { restock };

      // send data to the server
      //   const url = `http://localhost:5000/product/${productId}`;
      //   fetch(url, {
      //     method: "PUT",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(updateStock),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log("success", data);
      //       alert("update successfully!!!");
      //     });
      // } else {
      //   alert("please give a number");
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
          <p>supplierName: {supplierName}</p>
          <p>discription: {discription}</p>
          <p>quantity: {quantity}</p>
          <p>Price: ${price}</p>
          <p>sold: {sold}</p>
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
