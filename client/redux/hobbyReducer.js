const SEARCH = 'hobby/SEARCH';
const SET = 'hobby/SET';
const REMOVE = 'hobby/REMOVE';

const initState = {
  hobbies: {},
  selected: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  },
  selCount: 1
}

function parseHobbies(state, hobbies) {
  hobbies.forEach((hobby) => {
    var firstLetter = hobby[0].toUpperCase();
    if (!state.hobbies[firstLetter]) {
      state.hobbies[firstLetter] = [hobby];
    } else {
      state.hobbies[firstLetter].push(hobby);
    }
  });
  return state;
}

export default function reducer(state=initState, action) {
  switch (action.type) {
    case SEARCH:
      var editState = Object.assign({}, state);
      var newState = parseHobbies(editState, action.payload);
      return Object.assign({}, state, newState);
    case SET:
      var editState = Object.assign({}, state);
      editState.selected[editState.selCount] = action.payload;
      editState.selCount++;
      return Object.assign({}, state, editState);
    case REMOVE:
      var editState = Object.assign({}, state);
      editState.selCount--;
      editState.selected[editState.selCount] = null;
      return Object.assign({}, state, editState);
    default: return state;
  }
}

export function searchHobbies(hobbies) {
  return {
    type: SEARCH,
    payload: hobbies
  }
}

export function setHobby(hobby) {
  return {
    type: SET,
    payload: hobby
  }
}

export function removeHobby() {
  return {
    type: REMOVE
  }
}
