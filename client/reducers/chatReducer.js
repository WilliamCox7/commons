const NEW = 'chat/NEW';

const initState = {
  conversations: [
    {
      id: 1,
      convo: [
        {msg: 'Hey what are you doing tomorrow?', postId: 1, posted: '5-20-17'},
        {msg: 'Nothing why?', postId: 0, posted: '5-20-17'},
        {msg: 'Dude lets get a group together and go to the beach.', postId: 1, posted: '5-20-17'},
        {msg: 'But we live in uta?', postId: 0, posted: '5-20-17'},
        {msg: '*utah', postId: 0, posted: '5-20-17'},
        {msg: "What about the Salt Lake?", postId: 1, posted: '5-20-17'},
        {msg: 'You want to go to the beach on the Salt Lake?', postId: 1, posted: '5-20-17'},
        {msg: 'nm', postId: 0, posted: '5-20-17'}
      ]
    },
    {
      id: 2,
      convo: [
        {msg: 'Hey what are you doing tomorrow?', postId: 2, posted: '5-20-17'},
        {msg: 'Nothing why?', postId: 0, posted: '5-20-17'},
        {msg: 'Dude lets get a group together and go to the beach.', postId: 2, posted: '5-20-17'},
        {msg: 'But we live in uta?', postId: 0, posted: '5-20-17'},
        {msg: '*utah', postId: 0, posted: '5-20-17'},
        {msg: "What about the Salt Lake?", postId: 2, posted: '5-20-17'},
        {msg: 'You want to go to the beach on the Salt Lake?', postId: 2, posted: '5-20-17'},
        {msg: 'nm', postId: 0, posted: '5-20-17'}
      ]
    }
  ]
}

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state); // create state to manipulate

  switch(action.type) {

    case NEW:
      editState.conversations.forEach((convo, i) => {
        if (convo.id === action.id) {
          editState.conversations[i].convo.push({
            msg: action.msg, postId: action.postId, posted: '5-20-17'
          });
        }
      });
      return Object.assign({}, state, editState);

    default:
      return state;

  }

}

export function newMsg(id, postId, msg) {
  return {
    type: NEW,
    id: id,
    postId: postId,
    msg: msg
  }
}
