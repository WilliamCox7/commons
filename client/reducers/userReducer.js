const SET = 'user/SET';
const LOGIN = 'user/LOGIN';
const ADD = 'user/ADD';
const REM = 'user/REM';
const UPD = 'user/UPD';
const FILE = 'user/FILE';

const initState = {
  isLoggedIn: true,
  isFirstTime: false,
  id: 3,
  first: 'William',
  last: 'Cox',
  email: 'willubyu7@gmail.com',
  age: '25',
  gender: true,
  hobbies: [],
  attributes: [],
  activity: '',
  image: undefined,
  imageName: '',
  video: undefined,
  videoName: ''
}

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state); // create state to manipulate

  switch(action.type) {

    case SET: // initializes the user
      editState = action.payload;
      return Object.assign({}, state, editState);

    case LOGIN: // initializes the user
      editState.isLoggedIn = true;
      return Object.assign({}, state, editState);

    case ADD:
      if (editState[action.array].length < 5) {
        editState[action.array].push(action.hobby);
      }
      return Object.assign({}, state, editState);

    case REM:
      editState[action.array].shift();
      return Object.assign({}, state, editState);

    case UPD:
      editState.activity = action.activity;
      return Object.assign({}, state, editState);

    case FILE:
      editState[action.fileType] = action.result;
      editState[action.fileType+"Name"] = action.name;
      return Object.assign({}, state, editState);

    default: return state;

  }

}

/* initializes the user */
export function setUser(user) {
  return {
    type: SET,
    payload: user
  }
}

export function login() {
  return {
    type: LOGIN
  }
}

export function addToDial(hobby, array) {
  return {
    type: ADD,
    hobby: hobby,
    array: array
  }
}

export function removeFromDial(array) {
  return {
    type: REM,
    array: array
  }
}

export function updActivity(activity) {
  return {
    type: UPD,
    activity: activity
  }
}

export function addFile(type, result, name) {
  return {
    type: FILE,
    fileType: type,
    result: result,
    name: name
  }
}
