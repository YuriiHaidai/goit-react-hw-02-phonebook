import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = e => {
    e.preventDefault();
    this.props.handleSubmit(e);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.reset}>
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

export default ContactForm;
