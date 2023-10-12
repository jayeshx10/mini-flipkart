import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsDB } from "../App";

export const ProductCard = () => {
  const [data, setData] = useState([]);

  let { productId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const filteredData = productsDB.find(
        (product) => product.id === Number(productId)
      );
      setData(filteredData);
    };
    fetchData();
  });

  return (
    <div>
      <h3>{data.name}</h3>
      <p>Description: {data.description}</p>
      <p>Price: ₹{data.price}</p>
      <p>Quanity: {data.quantity}</p>
      <p>Category: {data.category}</p>
      <p>Brand: {data.brand}</p>
    </div>
  );
};
