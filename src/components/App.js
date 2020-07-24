import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import shortid from 'shortid';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const { contacts } = this.state;
    const itemContact = {
      id: shortid.generate(),
      name: name.defaultValue,
      number: number.defaultValue,
    };
    this.setState({ contacts: [...contacts, itemContact] });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const contactsList = this.filteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h1>Contacts</h1>
        <Filter
          length={contacts.length}
          filter={filter}
          handleChange={this.handleChange}
        />
        <ContactsList contacts={contactsList} />
      </div>
    );
  }
}
