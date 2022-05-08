import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useOneProduct from "../../hooks/useOneProduct";

const UpdateInventory = () => {
  let { productId } = useParams();
  const [product, setProduct] = useOneProduct(productId);
  const { _id, image, name, discription, quantity, supplierName, price, sold } =
    product;

  const restokRef = useRef("");

  // Update Quantity
  const handleUpdateQuantity = () => {
    let { quantity, sold, ...rest } = product;
    const newQuantity = parseInt(quantity) - 1;
    const newSold = parseInt(sold) + 1;
    const newProduct = { quantity: newQuantity, sold: newSold, ...rest };
    setProduct(newProduct);
  };

  // Restock product
  const handleRestock = () => {
    const restock = restokRef.current.value;
    // const restock = prompt("update Your stock");
    if (!isNaN(restock)) {
      let { quantity, ...rest } = product;
      const newQuantity = restock;
      const newProduct = { quantity: newQuantity, ...rest };
      setProduct(newProduct);
      restokRef.current.value = "";
    } else {
      alert("please give a number");
    }
  };

  // Update Product
  const handleUpdateProduct = () => {
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
          <p className="fs-5 mb-2">Id: {_id}</p>
          <p className="fs-5 mb-2">Name: {name}</p>
          <p className="fs-5 mb-2">Supplier Name: {supplierName}</p>
          <p className="fs-5 mb-2">Discription: {discription}</p>
          <p className="fs-5 mb-2">Quantity: {quantity}</p>
          <p className="fs-5 mb-2">Price: ${price}</p>
          <p className="fs-5 mb-2">Sold: {sold}</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 col-sm-6 col-md-3 ">
            <input
              type="number"
              ref={restokRef}
              placeholder="restock items"
              className="fs-5 px-2 me-2 w-100 d-block mt-2"
            />
          </div>
          <div className="col-11 col-sm-6 col-md-3 ">
            <button
              className="btn btn-success fs-5 w-100 d-block mt-2"
              onClick={handleRestock}
            >
              Restock
            </button>
          </div>
          <div className="col-11 col-sm-6 col-md-3 ">
            <button
              className="btn btn-danger fs-5 w-100 d-block mt-2"
              disabled={quantity === 0}
              onClick={handleUpdateQuantity}
            >
              Delivered
            </button>
          </div>
          <div className="col-11 col-sm-6 col-md-3">
            <button
              style={{ height: "36px", padding: "4px", borderRadius: "5px" }}
              className="buttons buttons-hover mb-5 fs-5 w-100 d-block mt-2"
              onClick={handleUpdateProduct}
            >
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInventory;
