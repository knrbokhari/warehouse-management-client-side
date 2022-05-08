import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    // const url = `https://calm-eyrie-49116.herokuapp.com/product?email=${email}`;
    const url = `${
      email
        ? `https://calm-eyrie-49116.herokuapp.com/product?email=${email}`
        : `https://calm-eyrie-49116.herokuapp.com/product`
    }`;

    const fetchUrl = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };
    fetchUrl();
  }, [products, user]);

  return [products, setProducts];
};

export default useProduct;
