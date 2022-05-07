import React from "react";
import { useParams } from "react-router-dom";
import useOneProduct from "../../hooks/useOneProduct";

const UpdateInventory = () => {
  let { productId } = useParams();
  const [product, setProduct] = useOneProduct(productId);
  const { _id, image, name, discription, quantity, supplierName, price, sold } =
    product;

  // Update Quantity
  const handleUpdateQuantity = () => {
    let { quantity, sold, ...rest } = product;
    const newQuantity = quantity - 1;
    const newSold = sold + 1;
    const newProduct = { quantity: newQuantity, sold: newSold, ...rest };
    setProduct(newProduct);
  };

  // Restock product
  const handleRestock = () => {
    const restock = prompt("update Your stock");
    if (!isNaN(restock)) {
      console.log(restock);
      let { quantity, ...rest } = product;
      const newQuantity = restock;
      const newProduct = { quantity: newQuantity, ...rest };
      setProduct(newProduct);
    } else {
      alert("please give a number");
    }
  };

  // Update Product
  const handleUpdateProduct = (event) => {
    //
    const updateProduct = {
      quantity: quantity,
      sold: sold,
      discription: discription,
      price: price,
    };

    // send data to the server
    const url = `https://calm-eyrie-49116.herokuapp.com/product/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("update successfully!!!");
      });
  };

  //
  return (
    <div className="container">
      <h2 className="text-center my-5">Update Inventory</h2>

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
            <button disabled={quantity === 0} onClick={handleUpdateQuantity}>
              Delivered
            </button>
            <button onClick={handleRestock}>restock</button>
          </div>
          <button onClick={handleUpdateProduct}>Save Change</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
