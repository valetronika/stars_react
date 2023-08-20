import Logo from '../../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import s from'./ContactsContainer.module.css';
import React from 'react'

export default function ContactsContainer() {
  return (
    <div className={s.contact_container}>
        <Logo theme='dark'/>
        <Contacts/>
    </div>
  )
}
