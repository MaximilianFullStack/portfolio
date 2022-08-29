import React, { useState, useEffect } from "react";
import git from "../images/github.png";
import dev from "../images/devpost.png";
import "../styles/deqity.css";

export default function Deqity() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  const handleResize = () => setSize([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {size[1] > 1535 ? (
        <>
          <div
            className="deqity"
            //style={{ transform: `translateY(${offsetY * 0.91}px)` }}
          >
            <h1>Deqity Protocol</h1>
            <h3>Submission For the 2022 Polygon Summer Hackathon</h3>
            <p>
              A decentralized marketplace to buy and sell tokenized private
              equity. It works by representing shares as erc-20 tokens then
              allowing shareholders to make transcactions with said shares. The
              owner of the contract can also inact a special sale in which all
              the shareholders are diluted and compensated according to the
              dilution amount. I developed multiple complex smart contracts and
              an frontend to make it accessible for non-developers.
            </p>
            <div className="links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Deqity"
              >
                <img src={git} alt="github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://devpost.com/software/deqity"
              >
                <img src={dev} alt="github" className="devpost" />
              </a>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/w7OCmQtcZmk"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="deqityDemo"
            className="video"
          />
        </>
      ) : (
        <div className="SMALL">
          <div
            className="deqitySMALL"
            //style={{ transform: `translateY(${offsetY * 0.91}px)` }}
          >
            <h1>Deqity Protocol</h1>
            <h3>Submission For the 2022 Polygon Summer Hackathon</h3>
            <p>
              A decentralized marketplace to buy and sell tokenized private
              equity. It works by representing shares as erc-20 tokens then
              allowing shareholders to make transcactions with said shares. The
              owner of the contract can also inact a special sale in which all
              the shareholders are diluted and compensated according to the
              dilution amount. I developed multiple complex smart contracts and
              an frontend to make it accessible for non-developers.
            </p>
            <div className="links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Deqity"
              >
                <img src={git} alt="github" className="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://devpost.com/software/deqity"
              >
                <img src={dev} alt="github" className="devpost" />
              </a>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/w7OCmQtcZmk"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="deqityDemo"
            className="videoSMALL"
          />
        </div>
      )}
    </>
  );
}
