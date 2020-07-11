import React, { Component } from 'react';
import { string } from 'prop-types';

import Text from '../Inputs/Text';
import Button from '../Inputs/Button';

import './style.css';

export default class Form extends Component {
  state = { url: '' }
  handleChange = (value) => {
    this.setState({ url: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `${document.location.protocol}//${document.location.hostname}:5454/api/tiny`;
    const body = { url: this.state.url };
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Text handleChange={this.handleChange} />
        <Button type="submit" handleClick={this.handleSubmit}>Generate</Button>
      </form>
    )
  }
}

Form.propTypes = {
  className: string,
}


