import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const wishlistAdd = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const wishlistRemove = (keyId) => {
    const newWishlist = wishlist.filter(({ id }) => id !== keyId);
    setWishlist(newWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistAdd, wishlistRemove }}>
      {children}
    </WishlistContext.Provider>
  );
};
