import React from "react";
import s from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";
import Cart from "./Cart/Cart";

export default function Header() {
    return (
        <div className={s.header}>
            <Logo theme="light" />
            <div className={s.menu_container}>
                <NavMenu />
                <Cart />
            </div>
        </div>
    );
}
