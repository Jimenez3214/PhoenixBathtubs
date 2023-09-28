import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/HomePage";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";

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
                    <Route path="/quote" />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));