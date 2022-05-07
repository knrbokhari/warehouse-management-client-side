import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://calm-eyrie-49116.herokuapp.com/product";
    const fetchUrl = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };
    fetchUrl();
  }, [products]);

  return [products];
};

export default useProduct;
