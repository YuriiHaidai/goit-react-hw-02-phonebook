import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const itemContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.props.addContact(itemContact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter Name..."
          />
        </label>
        <br />

        <label>
          Number:
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Enter Number..."
          />
        </label>
        <br />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
