import React, { useState, useEffect } from "react";
import git from "../images/github.png";
import dev from "../images/devpost.png";
import deqitySearch from "../images/deqitySearch.png";
import "../styles/deqity.css";

export default function Deqity() {
  const [offsetY, setOffsetY] = useState(0);
  const [imageOffset, setImageOffset] = useState(0);
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);

  function handleScroll() {
    let topSize, optiSize;
    if (size[0] > 700) {
      topSize = size[0];
    } else {
      topSize = 700;
    }
    if (size[1] > 1535) {
      optiSize = 1284;
    } else {
      optiSize = 1650;
    }

    if (
      window.pageYOffset >= topSize + optiSize + 600 &&
      window.pageYOffset < topSize + optiSize + 500
    ) {
      setOffsetY(window.pageYOffset - (topSize + optiSize));
    }

    if (
      window.pageYOffset >= topSize + optiSize / 2 &&
      window.pageYOffset < topSize + optiSize + 600
    ) {
      setImageOffset(window.pageYOffset - (topSize + optiSize) / 1.3);
    }
  }

  const handleResize = () => setSize([window.innerHeight, window.innerWidth]);

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {size[1] > 1535 ? (
        <>
          <div className="deqity">
            <h1>Deqity Protocol</h1>
            <h3>2022 Polygon Buidl It Hackathon Prize Winner</h3>
            <p>
              A decentralized marketplace that allows users to buy and sell
              tokenized private equity. It works by representing shares as
              erc-20 tokens and then allowing shareholders to make transactions
              with said shares. The contract owner can also enact a special sale
              in which all the shareholders are diluted and compensated
              according to the dilution amount.
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
          <div className="images">
            <div
              className="imageItem"
              style={{ transform: `translateX(-${imageOffset * 0.1}px)` }}
            >
              <iframe
                src="https://www.youtube.com/embed/w7OCmQtcZmk"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="deqityDemo"
                className="video"
              />
              <p>Deqity Video Submission</p>
            </div>
            <div
              className="imageItem"
              style={{ transform: `translateX(${imageOffset * 0.08}px)` }}
            >
              <img src={deqitySearch} alt="deqity search page" />
              <p>Deqity Search Page</p>
            </div>
          </div>
        </>
      ) : (
        <div className="SMALL">
          <div
            className="deqitySMALL"
            //style={{ transform: `translateY(${offsetY * 0.91}px)` }}
          >
            <h1>Deqity Protocol</h1>
            <h3>2022 Polygon Buidl It Hackathon Prize Winner</h3>
            <p>
              A decentralized marketplace that allows users to buy and sell
              tokenized private equity. It works by representing shares as
              erc-20 tokens and then allowing shareholders to make transactions
              with said shares. The contract owner can also enact a special sale
              in which all the shareholders are diluted and compensated
              according to the dilution amount.
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
          <div className="imagesSMALL">
            <div className="imageItem">
              <iframe
                src="https://www.youtube.com/embed/w7OCmQtcZmk"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="deqityDemo"
                className="videoSMALL"
                style={{ width: `${size[1] / 1.2}px` }}
              />
              <p>Deqity Video Submission</p>
            </div>
            <div className="imageItem">
              <img
                src={deqitySearch}
                alt="deqity search page"
                style={{ width: `${size[1] / 1.2}px` }}
              />
              <p>Deqity Search Page</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
