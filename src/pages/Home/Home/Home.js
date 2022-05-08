import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Specialties from "../Specialties/Specialties";
import "./Home.css";

const Home = () => {
  const [products] = useProduct();
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="container pb-3">
        <h2 className="pt-5 text-center">Inventory Items</h2>
        <div className="row mt-5 justify-content-center">
          {products.slice(0, 6).map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
        {products?.length > 6 ? (
          <Link
            style={{
              width: "150px",
              fontSize: "18px",
              borderRadius: "50px",
              height: "60px",
              padding: "15px 40px",
            }}
            className="buttons buttons-hover d-block mx-auto text-decoration-none mb-5"
            to="/inventory"
          >
            See all
          </Link>
        ) : (
          ""
        )}
      </div>
      <Specialties></Specialties>
    </div>
  );
};

export default Home;
