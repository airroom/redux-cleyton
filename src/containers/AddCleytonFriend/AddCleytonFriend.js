import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addFriend } from 'src/redux/actions/friends.js';

@connect(null, { addFriend })
export default class AddCleytonFriend extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, type } = this.refs;
    const { addFriend } = this.props;
    addFriend({
      name: name.value,
      type: type.options[type.selectedIndex].value
    });
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit}>
        <input ref="name" type="text" />
        <select ref="type">
          <option value="bear">Urso</option>
          <option value="lion">Leão</option>
          <option value="monkey">Macaco</option>
        </select>
      </form>
    );
  }
}
