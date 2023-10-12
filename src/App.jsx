import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyCart } from "./pages/MyCart";
import { MyWishlist } from "./pages/MyWishlist";
import { ProductCard } from "./pages/ProductCard";
import { useEffect } from "react";
import { fakeFetch } from "/src/api/fakeFetch1";

export let productsDB = [];

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fakeFetch("https://example.com/api/products");
      productsDB = response.data.products;
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>PRODUCT LISTING PAGE</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/myCart">My Cart</Link> |
        <Link to="/myWishlist">My WishList</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/myWishlist" element={<MyWishlist />} />
        <Route path="/product/:productId" element={<ProductCard />} />
      </Routes>
    </div>
  );
}
