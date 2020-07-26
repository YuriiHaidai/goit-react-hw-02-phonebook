import React from 'react';
import PropTypes from 'prop-types';

const ContactsItem = ({ name, number, onDelete }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsItem;
