import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const { _id, image, name, discription, quantity, supplierName, price } =
    props.product;

  const navigate = useNavigate();
  const navigateToProduct = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="col-11 col-sm-6 col-md-4 mb-5 d-flex justify-content-center">
      <Card style={{ width: "400px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text className="fs-4">
            {discription.length > 105 ? discription.slice(0, 104) : discription}
            {discription.length > 105 ? "..." : ""}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="fs-4">
            Supplier: {supplierName}
          </ListGroupItem>
          <ListGroupItem className="fs-4">Price: ${price}</ListGroupItem>
          <ListGroupItem className="fs-4">Quantity: {quantity}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button
            className="btn btn-success fs-4 mx-auto d-block"
            onClick={() => navigateToProduct(_id)}
          >
            Stock Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
