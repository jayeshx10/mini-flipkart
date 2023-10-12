import { useContext } from "react";
import { WishlistContext } from "/src/contexts/WishlistContext";

export const MyWishlist = () => {
  const { wishlist, wishlistRemove } = useContext(WishlistContext);

  const removeFromWishlist = (id) => {
    wishlistRemove(id);
  };

  return (
    <div>
      <h3>myWishlist: {wishlist.length}</h3>
      <div>
        {wishlist.map(
          ({ id, name, description, quantity, category, brand, price }) => {
            return (
              <div className="productInMyWishlist">
                <p>{name}</p>
                <p>Description: {description}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Price: ₹{price}</p>
                <button onClick={() => removeFromWishlist(id)}>
                  REMOVE FROM WISHLIST
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
