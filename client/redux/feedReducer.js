const PARSE = 'feed/PARSE';

const initState = {
  presentations: []
}

export default function reducer(state=initState, action) {
  switch (action.type) {
    case PARSE:
      var editState = Object.assign({}, state);
      editState.presentations = action.feed;
      return Object.assign({}, state, editState);
    default:
      return state;
  }
}

export function parse(data) {
  return {
    type: PARSE,
    feed: data
  }
}
