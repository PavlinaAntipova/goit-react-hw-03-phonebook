import React, { Component } from 'react';

import FormContacts from '../FormContacts';
import Filter from '../Filter';
import ContactList from '../ContactsList';
import s from './App.module.css';

// const DATA = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]

 

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    this.setState({ contacts: parsedContacts });
  }
  
  componentDidUpdate(prevProps, prevState) {
       if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
        }
  }

  updateState = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId,
        ),
      };
    });
  };

  filterContacts = () => {
    const normalizeName = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeName),
    );
    return filteredContacts;
  };

  render() {
    return (
      <div className={s.AppContainer}>
        <h1 className={s.title}>My Contacts</h1>
        <FormContacts
          updateState={this.updateState}
          contacts={this.state.contacts}
        />
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList
          contacts={this.filterContacts()}
          deleteFunc={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;