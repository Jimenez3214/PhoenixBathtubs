import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/HomePage";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import QuoteForm from "./components/QuoteForm";
import Faqs from "./components/FAQs";
import Refinishing from "./components/refinishing";
import Liners from "./components/liners";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/about/faq" element={<Faqs />} />
          <Route path="/services/refinishing" element={<Refinishing />} />
          <Route path="/services/liners" element={<Liners />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
