import s from "./ImageItem.module.css";
import React from "react";
import { useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
export default function ImageItem({ images, alt }) {
    const [index, setIndex] = useState(0);

    function goLeft() {
        let temp = index - 1 < 0 ? images.length - 1 : index - 1;
        setIndex(temp);
        console.log('left ',temp);
    }

    function goRight() {
        let temp = (index + 1) % images.length;
        setIndex(temp);
        console.log('right ',temp);

    }
    return (
        <div className={s.img_container}>
            <BiChevronsLeft className={s.btn_left} onClick={goLeft} />
            <img src={images[index]} alt={alt} />
            <BiChevronsRight className={s.btn_right} onClick={goRight} />
        </div>
    );
}
