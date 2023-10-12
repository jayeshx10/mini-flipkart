import { useContext, useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import { ProductCard } from "./ProductCard";
import { productsDB } from "../App";
import { CartContext } from "/src/contexts/CartContext";
import { WishlistContext } from "/src/contexts/WishlistContext";

export const Home = () => {
  const { updateCart } = useContext(CartContext);
  const { wishlistAdd } = useContext(WishlistContext);

  const addToCartHandler = (item) => {
    updateCart(item);
  };

  const addToWishlist = (item) => {
    wishlistAdd(item);
  };

  return (
    <div>
      <ul>
        {productsDB.map((item) => {
          const { id, name, description, price } = item;

          return (
            <li key={id}>
              <div className="productInHome">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price: ₹{price}</p>
                <Link to={`/product/${id}`}>Visit Item</Link>
                <br />
                <button onClick={() => addToCartHandler(item)}>
                  ADD TO CART
                </button>
                <button onClick={() => addToWishlist(item)}>
                  ADD TO WISHLIST
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
