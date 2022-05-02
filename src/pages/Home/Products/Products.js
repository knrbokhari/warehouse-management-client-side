import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { image, name, discription, quantity, supplierName, price } =
    props.product;
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-5 d-flex justify-content-center">
      <Card style={{ width: "400px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {discription.length > 135 ? discription.slice(0, 130) : discription}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Supplier Name: {supplierName}</ListGroupItem>
          <ListGroupItem>Price: ${price}</ListGroupItem>
          <ListGroupItem>Quantity: {quantity}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to="/">Stock Update</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
