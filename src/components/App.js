import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

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

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContactById = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  addContact = contact => {
    const newName = contact.name;
    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase(),
    );
    if (names.includes(newName.toLowerCase().trim())) {
      alert(`${newName} already in contacts`);
    } else {
      this.setState(state => ({
        contacts: [...state.contacts, contact],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const contactsList = this.filteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h1>Contacts</h1>
        <Filter
          length={contacts.length}
          filter={filter}
          handleChange={this.handleChange}
        />
        <ContactsList
          contacts={contactsList}
          onDelete={this.deleteContactById}
        />
      </div>
    );
  }
}
