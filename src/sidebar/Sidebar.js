import React, { useContext } from "react";
import "./Sidebar.scss";
import { UserContext } from "../App";

export default function Sidebar({ close }) {
  const msg = useContext(UserContext);
  return (
    <div className={`sidebar ${msg}`}>
      <div className="btn">
        <span className="icon" onClick={close}>
          <i class="fas fa-bars"></i>
        </span>
      </div>
      <div className="menus">
        <ul>
          <li>
            <img src="img/fb.png" alt="facebook" />
          </li>
          <li>
            <img src="img/google-plus.png" alt="gp" />
          </li>
          <li>
            <img src="img/github.png" alt="github" />
          </li>
          <li>
            <img src="img/insta.png" alt="insta" />
          </li>
          <li>
            <img src="img/linkedin.png" alt="linkedin" />
          </li>
        </ul>
      </div>
    </div>
  );
}
