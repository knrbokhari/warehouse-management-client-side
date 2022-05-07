import React from "react";
import { Form } from "react-bootstrap";

const AddProduct = () => {
  // add new product
  const handleAddProduct = (e) => {
    e.preventDefault();

    //   input value
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
        alert("users added successfully!!!");
        e.target.reset();
      });
  };

  //
  return (
    <div className="container">
      <h2>Add Product</h2>
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control name="name" type="text" placeholder="Product Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Supplier Name:</Form.Label>
          <Form.Control
            name="supplierName"
            type="text"
            placeholder="Supplier Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URl:</Form.Label>
          <Form.Control
            name="image"
            type="text"
            placeholder="Enter Image URl"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control name="quantity" type="number" placeholder="Quantity" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price:</Form.Label>
          <Form.Control name="price" type="number" placeholder="Enter Price" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sold:</Form.Label>
          <Form.Control name="sold" value="0" readOnly type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discription:</Form.Label>
          <Form.Control
            name="discription"
            as="textarea"
            type=""
            placeholder="Discription"
          />
        </Form.Group>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default AddProduct;
