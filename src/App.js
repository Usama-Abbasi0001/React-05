import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import Wislisht from "./pages/Wislisht";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <Routes>
        {/*Home page */}
        <Route path="/" element={<Home />} />

        {/* Sign page */}
        <Route path="/signup" element={<Sign />} />

        {/*Login page */}
        <Route path="/login" element={<Login />} />

        {/*About page */}
        <Route path="/about" element={<About />} />

        {/*Error page */}
        <Route path="/Error" element={<Error />} />

        {/*Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/*Wishlist page */}
        <Route path="/wishlist" element={<Wislisht />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>

      {/*Error page */}
    </>
  );
}

export default App;
