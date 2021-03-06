import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MenuData } from "./MenuData";
import "./Menu.css";
import { IconContext } from "react-icons";

function Menu() {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="menu">
          <Link to="#" className="menu-botao" onClick={showSideBar}>
            <FaIcons.FaBars />
            <span className="menu-texto">
              Menu
            </span>
          </Link>
          <Link to="/" className="menu-logo">
            Muffin Educacional
          </Link>
        </div>
        <nav className={sidebar ? "menu-lista active" : "menu-lista"}>
          <ul className="menu-lista__items">
            <li className="menu-toggle">
              <Link to="#" className="menu-botao">
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              </Link>
            </li>
            {MenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={showSideBar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
