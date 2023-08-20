import s from "./Stars.module.css";
import React from "react";

export default function Stars({ rating }) {
    let ratingValue = Math.round(rating);
    const stars = Array.from({ length: 5 }, (_, index) => {
        return (
            <span
                class={
                    index < ratingValue ? "fa fa-star active" : "fa fa-star "
                }
                key={index}
            ></span>
        );
    });

    return <div className={s.stars_container}>{stars}</div>;
}
