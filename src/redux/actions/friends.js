let nextFriendId = 0;

export function addFriend({ name, type }) {
  return {
    type: 'ADD_FRIEND',
    payload: {
      id: nextFriendId++,
      name,
      type
    }
  }
}
