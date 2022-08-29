import React, { useState, useEffect } from "react";
import arrow from "../images/downArrow.png";
import chain from "../images/chain.png";
import "../styles/main.css";

export default function Main() {
  const [offsetY, setOffsetY] = useState(0);
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  const [min, setMin] = useState(window.innerHeight);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleResize = () => {
    setSize([window.innerHeight, window.innerHeight]);
    if (window.innerHeight > 700) {
      setMin(window.innerHeight);
    }
  };

  const scrollContact = () => {
    let topSize, optiSize, deqitySize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }
    if (size[1] > 1535) {
      optiSize = 1284;
      deqitySize = 520;
    } else {
      optiSize = 1650;
      deqitySize = 830;
    }
    window.scrollTo({
      top: topSize + optiSize + deqitySize,
      behavior: "smooth",
    });
  };

  const scrollOptigon = () => {
    let topSize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }
    window.scrollTo({ top: topSize, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    window.addEventListener("resize", handleResize);

    if (window.innerHeight < 700) {
      setMin(700);
    }

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
        <button className="contactButton" onClick={scrollContact}>
          Contact Me
        </button>
      </div>

      <div className="scrollInfo" style={{ top: `${min - 70}px` }}>
        <p onClick={scrollOptigon}>See Projects Below</p>
        <img src={arrow} alt="" onClick={scrollOptigon} />
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
