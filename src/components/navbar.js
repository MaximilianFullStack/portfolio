import React, { useState, useEffect } from "react";
import navImage from "../images/navButton.png";
import "../styles/nav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState([window.innerHeight, window.innerHeight]);

  const handleResize = () => setSize([window.innerHeight, window.innerHeight]);

  const scrollOptigon = () => {
    let topSize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }
    window.scrollTo({ top: topSize, behavior: "smooth" });
    setIsOpen(!isOpen);
  };
  const scrollDeqity = () => {
    let topSize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }
    window.scrollTo({ top: topSize + 1284, behavior: "smooth" });
    setIsOpen(!isOpen);
  };
  const scrollContact = () => {
    let topSize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }
    window.scrollTo({ top: topSize + 1284 + 520, behavior: "smooth" });
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar">
        <img
          src={navImage}
          alt="nav"
          className="navButton"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>
      {isOpen ? (
        <div className="menu">
          <img
            src={navImage}
            alt="nav"
            className="navButton"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="menuOptions">
            <h3 onClick={scrollOptigon}>Optigon Bridge</h3>
            <h3 onClick={scrollDeqity}> Deqity Protocol</h3>
            <h3 onClick={scrollContact}>Contact</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
