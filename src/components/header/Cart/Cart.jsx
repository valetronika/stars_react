import React from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import s from'./Cart.module.css';

export default function Cart() {
    return (
        <div>
            <BsFillBasket3Fill className={s.cart} />
        </div>
    );
}
