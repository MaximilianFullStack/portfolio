import React from "react";
import "../styles/popup.css";

export default function Popup(props) {
  return (
    <div className="popupBox">
      <h3>{props.message}</h3>
    </div>
  );
}
