const NEW = 'chat/NEW';

const initState = {
  conversations: [
    {
      id: 1,
      convo: [
        {msg: 'I really hat that you are gay. I have always wanted to set you up with my older sister.', postId: 1, posted: '5-20-17'},
        {msg: 'I know....', postId: 3, posted: '5-20-17'},
        {msg: 'I can turn you for sure bae', postId: 1, posted: '5-20-17'},
        {msg: 'go. jus go', postId: 3, posted: '5-20-17'},
        {msg: '*just', postId: 3, posted: '5-20-17'},
        {msg: '*just', postId: 3, posted: '5-20-17'},
        {msg: "you're gay", postId: 1, posted: '5-20-17'},
        {msg: 'I can turn you for sure bae', postId: 1, posted: '5-20-17'},
        {msg: 'go. jus go', postId: 3, posted: '5-20-17'},
        {msg: '*just', postId: 3, posted: '5-20-17'},
        {msg: '*just', postId: 3, posted: '5-20-17'},
        {msg: "you're gay", postId: 1, posted: '5-20-17'}
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
