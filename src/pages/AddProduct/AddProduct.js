import React from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // add new product
  const handleAddProduct = (e) => {
    e.preventDefault();

    //   input value
    const email = user.email;
    const name = e.target.name.value;
    const sold = e.target.sold.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const discription = e.target.discription.value;
    const supplierName = e.target.supplierName.value;

    const product = {
      image,
      name,
      supplierName,
      quantity,
      price,
      sold,
      discription,
      email,
    };

    // send data to the server
    fetch("https://calm-eyrie-49116.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("product added successfully!!!");
        e.target.reset();
        navigate("/manageinventorie");
      });
  };

  //
  return (
    <div className="container">
      <h2 className="text-center my-5">Add Product</h2>
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Product Name:</Form.Label>
          <Form.Control
            className="fs-5"
            name="name"
            required
            type="text"
            placeholder="Product Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Supplier Name:</Form.Label>
          <Form.Control
            className="fs-5"
            name="supplierName"
            required
            type="text"
            placeholder="Supplier Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Image URl:</Form.Label>
          <Form.Control
            className="fs-5"
            name="image"
            required
            type="text"
            placeholder="Enter Image URl"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Quantity:</Form.Label>
          <Form.Control
            className="fs-5"
            name="quantity"
            required
            type="number"
            placeholder="Quantity"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Price:</Form.Label>
          <Form.Control
            className="fs-5"
            name="price"
            required
            type="number"
            placeholder="Enter Price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Sold:</Form.Label>
          <Form.Control
            className="fs-5"
            name="sold"
            value="0"
            readOnly
            type="number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-5">Discription:</Form.Label>
          <Form.Control
            className="fs-5"
            name="discription"
            required
            as="textarea"
            type=""
            placeholder="Discription"
          />
        </Form.Group>

        <button
          type="submit"
          className="buttons buttons-hover rounded-pill fs-5 px-5 py-3"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default AddProduct;
