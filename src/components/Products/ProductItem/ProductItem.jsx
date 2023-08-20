import ImageItem from '../ImageItem/ImageItem';
import Stars from '../Stars/Stars';
import s from './ProductItem.module.css';
import React from 'react'

export default function ProductItem({data}) {

 
  return (
    <div className={s.product_container}>
      <ImageItem images={data.images} alt={data.title}/>
      <p>{data.title}</p>
      <p>{data.price}$</p>
      <Stars rating={data.rating}/>
    </div>
  )
}
