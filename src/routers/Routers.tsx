import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop" element={<Shop />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;