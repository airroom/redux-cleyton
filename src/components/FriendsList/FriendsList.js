import React, { Component, PropTypes } from 'react';

export default class FriendsList extends Component {
  static propTypes = {
    friends: PropTypes.array
  };

  render() {
    return (
      <ul>
        {this.props.friends.map((friend) =>
          <li key={friend.id}>{friend.name} - {friend.type}</li>)
        }
      </ul>
    );
  }
}
