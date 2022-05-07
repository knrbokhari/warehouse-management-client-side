import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import useProduct from "../../hooks/useProduct";
import { faTrashAlt, faCloudUpload } from "@fortawesome/free-solid-svg-icons";

const ManageInventorie = () => {
  const [products, setProducts] = useProduct();

  // item number
  let num = 0;
  // handle Remove Product
  const handleRemoveProduct = (id) => {
    const proceed = window.confirm("Are you sure you want to remove");

    if (proceed) {
      // console.log(id);
      const URL = `https://calm-eyrie-49116.herokuapp.com/product/${id}`;
      fetch(URL, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((user) => user._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  //

  //
  return (
    <div className="container">
      <h2 className="text-center my-5">All Items</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>sold</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <p>{(num += 1)}</p>
              </td>
              <td>
                <p>{product?.name}</p>
              </td>
              <td>
                <p>{product?.quantity}</p>
              </td>
              <td>
                <p>${product?.price}</p>
              </td>
              <td>
                <p>{product?.sold}</p>
              </td>
              <td>
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "15px",
                  }}
                  onClick={() => handleRemoveProduct(product._id)}
                  className="btn btn-danger d-block mx-auto"
                >
                  <FontAwesomeIcon
                    className="fs-5"
                    icon={faTrashAlt}
                  ></FontAwesomeIcon>
                </button>
              </td>
              <td>
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "15px",
                  }}
                  className="btn btn-success  d-block mx-auto"
                >
                  <FontAwesomeIcon
                    className="fs-5"
                    icon={faCloudUpload}
                  ></FontAwesomeIcon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button>Add New Product</button>
    </div>
  );
};

export default ManageInventorie;
