import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import git from "../images/github.png";
import linked from "../images/linkedin.png";
import Popup from "./popup";
import "../styles/contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [activePopup, setPopup] = useState("");

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function sendEmail(e) {
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      e.preventDefault();

      let formParams = {
        user_name: name,
        sender_email: email,
        subject: subject,
        message: message,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAIL_SERIVCE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          formParams,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          async (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setPopup("Email Sent!");
            await timeout(1200);
            setPopup("");
          },
          async (error) => {
            setPopup(error.text);
            await timeout(1200);
            setPopup("");
          }
        );
    } else {
      setPopup("Please fill in all inputs!");
      await timeout(1200);
      setPopup("");
    }
  }

  return (
    <div className="contactForm">
      <h1 className="contactHeader">Contact me</h1>
      <div className="senderInfo">
        <input
          placeholder="Name"
          value={name}
          onChange={(value) => setName(value.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail(value.target.value)}
        />
      </div>
      <input
        placeholder="Subject"
        className="subject"
        value={subject}
        onChange={(value) => setSubject(value.target.value)}
      />
      <textarea
        placeholder="Message"
        className="message"
        value={message}
        onChange={(value) => setMessage(value.target.value)}
      />
      <div className="linksASub">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MaximilianFullStack"
        >
          <img src={git} alt="github" className="cGithub" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/maximilianfullstack/"
        >
          <img src={linked} alt="linkedin" className="cGithub" />
        </a>
        <button className="submitButton" onClick={sendEmail}>
          Send message!
        </button>
      </div>
      {activePopup !== "" ? (
        <Popup message={activePopup} onClick={() => setPopup("")} />
      ) : (
        <></>
      )}
    </div>
  );
}
