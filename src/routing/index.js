import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "screens/privacy";
import ProductDetail from "screens/ProductDetail";
import Splash from "screens/splash";
import Terms from "screens/terms";

const Home = lazy(() => import("screens/home"));
const Search = lazy(() => import("screens/search"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<Splash />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
