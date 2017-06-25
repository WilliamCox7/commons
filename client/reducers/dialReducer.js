const KEY = 'dial/KEY';

const initState = {
  hobbiesList: ["axe cleaning", "animal care", "airboarding", "ant collecting", "axe throwing"],
  attributesList: [],
  wordkey: 1
}

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state); // create state to manipulate

  switch(action.type) {

    case KEY:
      if (editState.wordkey === 5) { editState.wordkey = 1; }
      else { editState.wordkey++; }
      return Object.assign({}, state, editState);

    default:
      return state;

  }

}

export function updKey() {
  return {
    type: KEY
  }
}
