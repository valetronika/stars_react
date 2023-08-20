import s from'./MediaContainer.module.css';
import React from 'react'
import CopyrightNotice from './components/CopyrightNotice/CopyrightNotice';
import SocialMedia from './components/SocialMedia/SocialMedia';

export default function MediaContainer() {
  return (
    <div className={s.media_container}>
        <SocialMedia/>
        <CopyrightNotice/>
    </div>
  )
}
