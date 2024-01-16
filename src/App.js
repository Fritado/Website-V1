import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Benefits from "./pages/Benefits";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/benefits" element={<Benefits />} />
        <Route exact path="/support" element={<Contact />} />
        <Route exact path="/features" element={<Features />} />
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
