import React, { useState, useEffect } from "react";
import chain from "../images/chain.png";
import "../styles/main.css";

export default function Main() {
  const [offsetY, setOffsetY] = useState(0);
  const [size, setSize] = useState([window.innerHeight, window.innerHeight]);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleResize = () => setSize([window.innerHeight, window.innerHeight]);

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="info"
        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
      >
        <h1>Maximilian Mathews</h1>
        <h3>DeFi Engineer</h3>
        <p>
          From the time I discovered blockchain technology, I knew it was
          revolutionary, and I desired to be part of its development and
          adoption.
        </p>
        <button className="contactButton">Contact Me</button>
      </div>

      <img
        src={chain}
        alt=""
        className="chain"
        style={{
          transform: `translateX(${-offsetY * 0.12}px)`,
          height: `${size[0]}px`,
        }}
      />
    </>
  );
}
