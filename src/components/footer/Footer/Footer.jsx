import ContactsContainer from '../ContactsContainer/ContactsContainer';
import MediaContainer from '../Media/MediaContainer';
import s from'./Footer.module.css';
import React from 'react'

export default function Footer() {
  return (
    <div className={s.footer}>
        <ContactsContainer/>
        <MediaContainer/>
    </div>
  )
}
