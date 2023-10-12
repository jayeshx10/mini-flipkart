import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeFetch } from "/src/api/fakeFetch1";
import { productsDB } from "../App";
import { CartContext } from "../contexts/CartContext";

export const MyCart = () => {
  const { cart } = useContext(CartContext);
  const { deleteProductFromCart } = useContext(CartContext);

  const deleteItem = (keyId) => {
    deleteProductFromCart(keyId);
  };

  return (
    <div>
      <h3>myCart: {cart.length}</h3>
      {cart.map(
        ({ id, name, description, quantity, category, brand, price }) => {
          return (
            <div className="productInMyCart">
              <p>{name}</p>
              <p>Description: {description}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Brand: {brand}</p>
              <p>Price: ₹{price}</p>
              <button onClick={() => deleteItem(id)}>DELETE</button>
            </div>
          );
        }
      )}
    </div>
  );
};
