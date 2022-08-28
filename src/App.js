import React, { useState, useEffect } from "react";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Optigon from "./components/optigon";
import Deqity from "./components/deqity";
import Contact from "./components/contact";
import "./styles/body.css";

export default function App() {
  const [size, setSize] = useState([window.innerHeight, window.innerHeight]);

  const handleResize = () => setSize([window.innerHeight, window.innerHeight]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div className="main" style={{ height: `${size[0]}px` }}>
        <Main />
      </div>
      <div className="optigon">
        <Optigon />
      </div>
      <div className="deqityB">
        <Deqity />
      </div>
      <div className="contactSection" style={{ height: `${size[0]}px` }}>
        <Contact />
      </div>
    </>
  );
}
