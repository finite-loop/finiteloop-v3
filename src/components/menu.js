import React, { useState } from "react"
import { navigate } from "@reach/router"

const Menu = () => {
  const [menuStatus, setMenuStatus] = useState("Closed")

  const toggleMenu = () => {
    if (menuStatus === "Open") setMenuStatus("Closed")
    else setMenuStatus("Open")
  }

  const closeMenu = () => {
    setMenuStatus("Closed")
  }

  return (
    <>
      <div
        className={
          menuStatus === "Open" ? "menuContainer active" : "menuContainer"
        }
        onClick={toggleMenu}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={menuStatus === "Open" ? "overlay open" : "overlay"}>
        <nav>
          <ul id="menu" className="actions">
            <li data-menuanchor="intro">
              <a href="#intro" onClick={closeMenu}>
                Introduction
              </a>
            </li>
            <li data-menuanchor="teams">
              <a href="#teams" onClick={closeMenu}>
                Teams
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
