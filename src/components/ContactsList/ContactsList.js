import React from 'react';
import PropTypes from 'prop-types';


import ContactItem from '../ContactItem';
import s from './ContactsList.module.css';

function ContactsList({ contacts, deleteFunc}) {
  
  
  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul>
        
        {contacts.length
          ? contacts.map(contact => (
              <ContactItem
                id={contact.id}
                name={contact.name}
                number={contact.number}
                deleteItem={deleteFunc}
              />
            ))
          : 'No contacts here'}
      </ul>
    </>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteFunc: PropTypes.func

}