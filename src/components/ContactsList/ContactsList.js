import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);

ContactsList.prototype = {
  contacts: PropTypes.func.isRequired,
};

export default ContactsList;
