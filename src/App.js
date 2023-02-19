import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <main>
      <Router>
        <MainNavigation />
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
