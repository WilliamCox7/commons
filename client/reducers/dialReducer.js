

const initState = {
  hobbiesList: ["axe cleaning", "animal care", "airboarding", "ant collecting", "axe throwing"],
  attributesList: []
}

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state); // create state to manipulate

  switch(action.type) {

    default:
      return state;

  }

}
