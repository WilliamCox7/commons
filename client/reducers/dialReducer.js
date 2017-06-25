const KEY = 'dial/KEY';

const initState = {
  hobbiesList: ["axe cleaning", "animal care", "airboarding", "ant collecting", "axe throwing"],
  attributesList: [],
  wordkey: {
    attributes: 1,
    hobbies: 1
  }
}

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state); // create state to manipulate

  switch(action.type) {

    case KEY:
      if (editState.wordkey[action.array] === 5) {
        editState.wordkey[action.array] = 1;
      }
      else { editState.wordkey[action.array]++; }
      return Object.assign({}, state, editState);

    default:
      return state;

  }

}

export function updKey(array) {
  return {
    type: KEY,
    array: array
  }
}
