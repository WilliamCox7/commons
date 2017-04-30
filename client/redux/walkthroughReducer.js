const SEARCH = 'dial/SEARCH';
const SET_HOBBY = 'dial/SET_HOBBY';
const SET_DEFINE = 'dial/SET_DEFINE';
const SET_ACTIVITY = 'dial/SET_ACTIVITY';
const REM_HOBBY = 'dial/REM_HOBBY';
const REM_DEFINE = 'dial/REM_DEFINE';

const initState = {
  hobbies: {},
  defines: {},
  hobbySelected: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  },
  defineSelected: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  },
  hobbyCount: 1,
  defineCount: 1,
  activity: null
}

function parseData(state, data, option) {
  data.forEach((d) => {
    var firstLetter = d[0].toUpperCase();
    if (!state[option][firstLetter]) {
      state[option][firstLetter] = [d];
    } else {
      state[option][firstLetter].push(d);
    }
  });
  return state;
}

export default function reducer(state=initState, action) {
  switch (action.type) {
    case SEARCH:
      var editState = Object.assign({}, state);
      var newState = parseData(editState, action.hobbies, 'hobbies');
      var newState = parseData(editState, action.defines, 'defines');
      return Object.assign({}, state, newState);
    case SET_HOBBY:
      var editState = Object.assign({}, state);
      if (editState.hobbyCount !== 6) {
        editState.hobbySelected[editState.hobbyCount] = action.payload;
        editState.hobbyCount++;
        return Object.assign({}, state, editState);
      } else {
        return state;
      }
    case SET_DEFINE:
      var editState = Object.assign({}, state);
      if (editState.defineCount !== 6) {
        editState.defineSelected[editState.defineCount] = action.payload;
        editState.defineCount++;
        return Object.assign({}, state, editState);
      } else {
        return state;
      }
    case SET_ACTIVITY:
      var editState = Object.assign({}, state);
      editState.activity = action.payload;
      return Object.assign({}, state, editState);
    case REM_HOBBY:
      var editState = Object.assign({}, state);
      if (editState.hobbyCount !== 1) {
        editState.hobbyCount--;
        editState.hobbySelected[editState.hobbyCount] = null;
        return Object.assign({}, state, editState);
      } else {
        return state;
      }
    case REM_DEFINE:
      var editState = Object.assign({}, state);
      if (editState.defineCount !== 1) {
        editState.defineCount--;
        editState.defineSelected[editState.defineCount] = null;
        return Object.assign({}, state, editState);
      } else {
        return state;
      }
    default: return state;
  }
}

export function search(data) {
  return {
    type: SEARCH,
    hobbies: data.hobbies,
    defines: data.defines
  }
}

export function setHobby(hobby) {
  return {
    type: SET_HOBBY,
    payload: hobby
  }
}

export function setDefine(define) {
  return {
    type: SET_DEFINE,
    payload: define
  }
}

export function setActivity(activity) {
  return {
    type: SET_ACTIVITY,
    payload: activity
  }
}

export function removeHobby() {
  return {
    type: REM_HOBBY
  }
}

export function removeDefine() {
  return {
    type: REM_DEFINE
  }
}
