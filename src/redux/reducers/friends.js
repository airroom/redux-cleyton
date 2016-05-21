export default friends;

function friend(state = {}, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      const { id, type, name } = action.payload;
      return { id, type, name };
    default:
      return state;
  }
}

function friends(state = [], action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return [
        ...state,
        friend(undefined, action)
      ]
    default:
      return state;
  }
}
