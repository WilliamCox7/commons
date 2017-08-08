const LIKE = 'feed/LIKE';

const initState = {
  presentations: [
    {
      id: 1,
      first: 'Jacob',
      last: 'Kenning',
      age: '24',
      location: 'Provo, UT',
      test: 'INFJ',
      video1: 'https://scontent.cdninstagram.com/t50.2886-16/13629334_748478928627722_1426992035_s.mp4',
      video2: '',
      video3: '',
      pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/18620074_10213312837234040_6495979955860879858_n.jpg?oh=e25310a9012856a90ce9dfb456466b61&oe=59D93FB7',
      pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14212812_10210588356523725_6540622426231952507_n.jpg?oh=8b7a51d43ba604557bd012aa23987f13&oe=59CE65B1',
      pic3: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13413757_10209782621020841_9001998158929460725_n.jpg?oh=85b6132059d73eca0e78e0f0476e4fa1&oe=59C9EF7D',
      liked: false,
      match: true,
      hobbies: ['Dancing', 'Curling', 'Dabbing', 'Kissing', 'Dabbling'],
      attributes: ['Jew', 'Canadian', 'Septuagenarian', 'Jedi', 'Sith'],
      activity: 'I am going to eat breakfast in the morning. Tomorrow and forever. Join me.',
      posted: '1 hour ago'
    },
    {
      id: 2,
      first: 'Davi',
      last: 'Johnson',
      age: '22',
      location: 'Provo, UT',
      test: 'ENFP',
      video1: 'https://scontent.cdninstagram.com/t50.2886-16/20224361_123231714960292_8178133866393894912_n.mp4',
      video2: '',
      video3: '',
      pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19225780_10155221619650211_4523765197098468355_n.jpg?oh=5992094d533c77f0159db3b098187bae&oe=59C6CE47',
      pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13221485_10154068074535211_4845726143533135830_n.jpg?oh=cd98662e6769ddf1f545fca088e3a75e&oe=59D1B110',
      pic3: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12240159_10153639454715211_5945661163850926545_n.jpg?oh=7c052638e73d8a3d40106a38fc39e011&oe=59C49989',
      liked: false,
      match: true,
      hobbies: ['Axe Throwing', 'Arsen', 'Painting', 'Planking', 'Hiking'],
      attributes: ['Muslim', 'Jewish', 'Canadian', 'Islamic', 'Christian'],
      activity: "I'm going to join the pilgrimage to the Black Stone of Mecca, Hajj to pray to Abraham.",
      posted: '22 hours ago'
    },
    {
      id: 3,
      first: 'Andrew',
      last: 'Day',
      age: '25',
      location: 'Provo, UT',
      test: '',
      video1: 'https://scontent-lax3-1.cdninstagram.com/t50.2886-16/20669940_122318171741368_2330054908092350464_n.mp4',
      video2: '',
      video3: '',
      pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12189801_1019558668066383_1592587300257835667_n.jpg?oh=ae85cb3a634c74a11d3704e1ed2d0cf2&oe=59F92E10',
      pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10672294_814071901948395_178206037913823933_n.jpg?oh=2fbcb440e30964c280b4894f8fe6077d&oe=5A0A2F6E',
      pic3: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/10288735_736650569690529_6835953230977799582_n.jpg?oh=61141ad8ee491a8667509e50a129e2fd&oe=5A05C71F',
      liked: false,
      match: false,
      hobbies: ['Dragon Slaying', 'Jousting', 'Sword Fighting', 'Hiking', 'Crafts'],
      attributes: ['Programmer', 'Swinging', 'Shoe Salesman', 'Jewish', 'Spoon Collector'],
      activity: 'Taking an internship at Toys R Us to become a Tiny Tot Shoe Salesman.',
      posted: '10 seconds ago'
    }
  ]
}

export default function reducer(state=initState, action) {

  let editState = Object.assign({}, state); // create state to manipulate

  switch(action.type) {

    case LIKE:
      editState.presentations.forEach((pres, i) => {
        if (pres.id === action.payload) {
          editState.presentations[i].liked = !pres.liked;
        }
      });
      console.log(editState);
      return Object.assign({}, state, editState);

    default:
      return state;

  }

}

export function likePerson(id) {
  return {
    type: LIKE,
    payload: id
  }
}
