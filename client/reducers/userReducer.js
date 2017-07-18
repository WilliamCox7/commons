const SET = 'user/SET';
const LOGIN = 'user/LOGIN';
const ADD = 'user/ADD';
const REM = 'user/REM';
const UPD = 'user/UPD';
const FILE = 'user/FILE';

const initState = {
  isLoggedIn: true,
  isFirstTime: false,
  id: 0,
  first: 'William',
  last: 'Cox',
  email: 'willubyu7@gmail.com',
  age: '25',
  gender: true,
  location: 'Provo, UT',
  hobbies: ['Jeeping', 'Watching TV', 'Backpacking', 'Programming', 'Sports'],
  attributes: ['Programmer', 'Film Editor', 'Manager', 'Entrepreneur', 'Family Man'],
  activity: 'Going backpacking next week! Headed to Red Castle in Utah. Supposed to be spectacular!',
  image: undefined,
  pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12316219_10203972004460469_2680188925033407079_n.jpg?oh=5bf7789f38140578fa1092ebc518f3d3&oe=59DBBB2A',
  pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12246599_10203881235431300_1895348970772056564_n.jpg?oh=897e31e96c008e7299213f651986c1d7&oe=5A108C74',
  pic3: '',
  imageName: '',
  vid: undefined,
  video1: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
  video2: '',
  video3: '',
  vidName: ''
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
