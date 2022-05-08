import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useOneProduct from "../../hooks/useOneProduct";

const UpdateSingelProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useOneProduct(productId);
  const { image, name, discription, supplierName, sold, price } = product;

  // discription
  const handelDiscription = (e) => {
    const { discription, ...rest } = product;
    const newDiscription = e.target.value;
    const newProduct = { discription: newDiscription, ...rest };
    setProduct(newProduct);
  };

  // Update Product
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const newQuantity = event.target.newQuantity.value;
    const newPrice = event.target.newPrice.value;

    const updateProduct = {
      quantity: newQuantity,
      price: newPrice <= 0 ? price : newPrice,
      discription: discription,
      sold: sold,
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
        event.target.reset();
        navigate("/manageinventorie");
      });
  };

  //
  return (
    <div className="container">
      <h2 className="text-center my-5">Update Product</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-11 col-md-5">
          <img src={image} alt="" width="100%" />
        </div>
        <div className="col-11 col-md-7">
          <form onSubmit={handleUpdateProduct} className="text-left fs-4">
            <input
              type="text"
              name="name"
              value={name}
              className="form-control fs-4 mb-3"
              readOnly
            />
            <input
              type="text"
              name="supplierName"
              value={supplierName}
              className="form-control fs-4 mb-3"
              placeholder="your email"
              readOnly
            />
            <input
              type="number"
              name="newQuantity"
              className="form-control fs-4 mb-3"
              placeholder="quantity"
              required
              title="set previes quantity"
            />
            <input
              type="number"
              name="newPrice"
              className="form-control fs-4 mb-3"
              placeholder="your price"
            />
            <input
              type="number"
              name="sold"
              value={sold}
              className="form-control fs-4 mb-3"
              readOnly
            />
            <textarea
              type="text"
              name="discription"
              value={discription}
              className="form-control fs-4 mb-3"
              placeholder="discription"
              onChange={handelDiscription}
              style={{ height: "150px" }}
            />
            <button
              type="submit"
              style={{ borderRadius: "30px", height: "50px" }}
              className="buttons buttons-hover fs-4 mx-auto py-0 d-block"
            >
              Update product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSingelProduct;
