// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import "./App.css";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";


export default function App() {

  return (

    <Router>

      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
