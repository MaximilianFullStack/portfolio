import React, { useState, useEffect } from "react";
import optigonMain from "../images/optigonMain.png";
import optigonStake from "../images/optigonStake.png";
import optigonUser from "../images/optigonUser.png";
import git from "../images/github.png";
import "../styles/projects.css";

export default function Optigon() {
  const [offsetY, setOffsetY] = useState(0);
  const [imageOffset, setImageOffset] = useState(0);
  const [size, setSize] = useState([window.innerHeight, window.innerHeight]);

  const handleResize = () => setSize([window.innerHeight, window.innerHeight]);

  function handleScroll() {
    let topSize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }

    if (window.pageYOffset >= topSize && window.pageYOffset < topSize + 500) {
      setOffsetY(window.pageYOffset - topSize);
    }

    if (
      window.pageYOffset >= topSize / 2 &&
      window.pageYOffset < topSize + 600
    ) {
      setImageOffset(window.pageYOffset - topSize / 2);
    }
  }

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="project"
        style={{ transform: `translateY(${offsetY * 0.91}px)` }}
      >
        <h1>Optigon Bridge</h1>
        <h3>An ether bridge between Polygon and Optimism</h3>
        <p>
          Each contract acts as a liquidity pool and distrubutes network fees to
          stakers. A relay handles multi-chain communication by listening for
          events, then calling functions on the corresponding contract with the
          recieved data.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MaximilianFullStack/optigon-bridge-core"
        >
          <img src={git} alt="github" className="github" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MaximilianFullStack/optigon-bridge-frontend"
        >
          <img src={git} alt="github" className="github" />
        </a>
      </div>
      <div className="images">
        <div
          className="imageItem"
          style={{ transform: `translateX(-${imageOffset * 0.1}px)` }}
        >
          <img src={optigonMain} alt="optigon main page" />
          <p>Polygon to Optimism Bridge Interface</p>
        </div>
        <div
          className="imageItem"
          style={{ transform: `translateX(${imageOffset * 0.08}px)` }}
        >
          <img src={optigonStake} alt="optigon stake page" />
          <p>Polygon Stake Interface</p>
        </div>
        <div
          className="imageItem"
          style={{ transform: `translateX(-${imageOffset * 0.06}px)` }}
        >
          <img src={optigonUser} alt="optigon user page" />
          <p>Polygon User Interface</p>
        </div>
      </div>
    </>
  );
}
