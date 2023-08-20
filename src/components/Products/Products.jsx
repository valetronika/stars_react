import { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import s from"./Products.module.css";
import React from "react";

export default function Products() {
    const [data, setData] = useState([]);

    const url = "https://dummyjson.com/products";
    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setData(data.products));
    }, []);
    return (
        <div className={s.wrapper}>
            <div className={s.products_container}>
                {data.map((elem) => (
                    <ProductItem data={elem} key={`${elem.id}${elem.title}`} />
                ))}
            
            </div>
        </div>
    );
}
