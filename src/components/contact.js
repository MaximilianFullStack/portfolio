import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contactForm">
      <h1 className="contactHeader">Contact me</h1>
      <div className="senderInfo">
        <input placeholder="Name" />
        <input placeholder="Email" />
      </div>
      <input placeholder="Subject" className="subject" />
      <textarea placeholder="Message" className="message" />
      <button className="submitButton">Send message!</button>
    </div>
  );
}
