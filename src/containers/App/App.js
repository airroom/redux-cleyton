import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddCleytonFriend from 'src/containers/AddCleytonFriend';
import FriendsList from 'src/components/FriendsList';

@connect(state => ({ friends : state.friends }))
export default class App extends Component {
  static propTypes = {
    friends: PropTypes.array
  };

  render() {
    return (
      <div>
        <AddCleytonFriend />
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}
