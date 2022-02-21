import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import s from './FormContacts.module.css';

class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  alertOnExistedContacts = () => {
        if (
            this.props.contacts.find(
              contact => contact.name === this.state.name,
            )
          ) {
            alert(`${this.state.name} is already in the contacts!`);
            this.reset();
            return;
          }
        }

  render() {
    return (
      <form
        className={s.Form}
        onSubmit={e => {
          e.preventDefault();
          this.alertOnExistedContacts();
          this.props.updateState({ id: nanoid(), ...this.state });
          this.reset();
        }}
      >
        <label className={s.name}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name goes here"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.phone}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number goes here"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default FormContacts;

FormContacts.propTypes = {
  updateState: PropTypes.func,
  contacts: PropTypes.array
}