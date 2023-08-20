import s from'./Logo.module.css';
import img from '../../image/logo.svg'
import img2 from '../../image/logo_footer.svg'

import React from 'react'

export default function Logo({theme}) {
  return (
    <div className={`${s.logo} `}>
        <img src={theme=="light"?img:img2} alt="logo"  className={` ${s[theme]}`}/>
        <h2 className={`${s.logo_text} ${s[theme]}`}>Simple Shop</h2>
    </div>
  )
}
