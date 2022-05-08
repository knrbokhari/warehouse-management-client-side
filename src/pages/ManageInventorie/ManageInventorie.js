import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { faTrashAlt, faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate";

const ManageInventorie = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const email = user?.email;
      const url = `https://calm-eyrie-49116.herokuapp.com/product?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getProducts();
  }, [user]);

  // item number
  let num = 0;
  // handle Remove Product
  const handleRemoveProduct = (id) => {
    const proceed = window.confirm("Are you  sure you want to remove");

    if (proceed) {
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

  // handle Update Product
  const handleUpdateProduct = (id) => {
    navigate(`/updateproduct/${id}`);
  };

  //
  return (
    <div className="container">
      <h2 className="text-center my-5">All Items ({products.length})</h2>
      {products.length === 0 ? (
        <h3>You don't have any item. Please add item..</h3>
      ) : (
        ""
      )}
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
                  onClick={() => handleUpdateProduct(product._id)}
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
      <Link
        style={{ width: "180px", borderRadius: "30px", fontSize: "18px" }}
        className="buttons mx-auto buttons-hover mb-5 mt-4 d-block p-2 text-center text-decoration-none"
        to="/addproduct"
      >
        Add New Item
      </Link>
    </div>
  );
};

export default ManageInventorie;
