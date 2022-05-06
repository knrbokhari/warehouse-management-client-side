import { useEffect, useState } from "react";

const useOneProduct = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://calm-eyrie-49116.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return [product, setProduct];
};

export default useOneProduct;
