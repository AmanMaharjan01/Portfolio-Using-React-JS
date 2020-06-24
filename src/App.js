import React, { useState, createContext } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Sidebar from "./sidebar/Sidebar";
import About from "./About/About";

export const UserContext = createContext();

function App() {
  const [classname, setClassname] = useState("sidebar-open");

  const opensidebar = () => {
    setClassname("sidebar-open");
  };

  const closesidebar = () => {
    setClassname("sidebar-close");
  };

  return (
    <div className="App">
      <img src="img/background1.jpg" alt="bgimg" />
      <UserContext.Provider value={classname}>
        <Nav open={opensidebar} />
        <Sidebar close={closesidebar} />
      </UserContext.Provider>
      <div className="front-page">
        <div className="content">
          <div className="text">
            <div className="desc">
              <p id="hello">Hello,</p>
              <span className="head">I'm Aman</span>
              <p id="about">
                I'm a Web and UI/UX Designer, and also passionate on doing Web
                Development.
              </p>
              
            </div>
          </div>
          <div className="photo">
            <img src="img/me.jpg" alt="me" id="me" />
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}

export default App;
