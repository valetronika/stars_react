import s from "./NavMenu.module.css";
import React, { useState, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";

export default function NavMenu() {
    const [isActive, setIsActive] = useState(false);

    const setActive = () => {
        setIsActive(!isActive);
        console.log(isActive);
    };

    return (
        <div >
            <div className={s.nav_menu}>
              <ul className={isActive?s.active:''}>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Discover</li>
                  <li>Forum</li>
                  <li>Sign in</li>
              </ul>
            </div>

            <div onClick={setActive} className={s.toggle}  >
              <Hamburger />
            </div>
        </div>
    );
}
