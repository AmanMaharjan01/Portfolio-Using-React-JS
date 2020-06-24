import React from "react";
import "./Nav.scss";

export default function Nav({ open }) {
  return (
    <div className="nav">
      <span className="icon" onClick={open}>
        <i class="fas fa-bars"></i>
      </span>
      <div className="content">
        <img
          src="img/twitter.png"
          alt="twitter"
          id="twitter"
          width="40"
          height="40"
        />
        <img src="img/in.png" alt="ln" id="linkedin" width="42" height="42" />
        <button className="contact">
          <img src="img/phone.png" alt="phone" id="phone" />
          <span className="text">Call</span>
        </button>
      </div>
    </div>
  );
}
