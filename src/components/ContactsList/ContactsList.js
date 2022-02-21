import React, { Component } from 'react';
import ContactItem from '../ContactItem';
import s from './ContactsList.module.css';

function ContactsList(props) {
  
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        
        {props.contacts.length
          ? props.contacts.map(contact => (
              <ContactItem
                id={contact.id}
                name={contact.name}
                number={contact.number}
                delete={props.delete}
              />
            ))
          : 'No contacts here'}
      </ul>
    </>
  );
}

export default ContactsList;