import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "screens/splash";

const Home = lazy(() => import("screens/home"));
const Search = lazy(() => import("screens/search"));
const Contact = lazy(() => import("screens/contact"));
const Developer = lazy(() => import("screens/developer"));
const Privacy = lazy(() => import("screens/privacy"));
const ProductDetail = lazy(() => import("screens/ProductDetail"));
const Terms = lazy(() => import("screens/terms"));
const Analytics = lazy(() => import("screens/analytics"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<Splash />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
