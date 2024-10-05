import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import CartPage from "./components/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" component={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
