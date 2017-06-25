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
      video1: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      video2: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      video3: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/18620074_10213312837234040_6495979955860879858_n.jpg?oh=e25310a9012856a90ce9dfb456466b61&oe=59D93FB7',
      pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14212812_10210588356523725_6540622426231952507_n.jpg?oh=8b7a51d43ba604557bd012aa23987f13&oe=59CE65B1',
      pic3: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13413757_10209782621020841_9001998158929460725_n.jpg?oh=85b6132059d73eca0e78e0f0476e4fa1&oe=59C9EF7D',
      liked: false,
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
      video1: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      video2: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      video3: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/19225780_10155221619650211_4523765197098468355_n.jpg?oh=5992094d533c77f0159db3b098187bae&oe=59C6CE47',
      pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/13221485_10154068074535211_4845726143533135830_n.jpg?oh=cd98662e6769ddf1f545fca088e3a75e&oe=59D1B110',
      pic3: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12240159_10153639454715211_5945661163850926545_n.jpg?oh=7c052638e73d8a3d40106a38fc39e011&oe=59C49989',
      liked: false,
      hobbies: ['Axe Throwing', 'Arsen', 'Painting', 'Planking', 'Hiking'],
      attributes: ['Muslim', 'Jewish', 'Canadian', 'Islamic', 'Christian'],
      activity: "I'm going to join the pilgrimage to the Black Stone of Mecca, Hajj to pray to Abraham.",
      posted: '22 hours ago'
    },
    {
      id: 3,
      first: 'William',
      last: 'Cox',
      age: '25',
      location: 'Provo, UT',
      test: '',
      video1: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      video2: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      video3: 'https://williamcox7.github.io/portfolio/fjvid.mp4',
      pic1: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12316219_10203972004460469_2680188925033407079_n.jpg?oh=5bf7789f38140578fa1092ebc518f3d3&oe=59DBBB2A',
      pic2: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12246599_10203881235431300_1895348970772056564_n.jpg?oh=897e31e96c008e7299213f651986c1d7&oe=5A108C74',
      pic3: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11216802_10203513416916067_8828251330570732585_n.jpg?oh=e230836bb02e025e3827c5d0ee1f2147&oe=59C6B9A5',
      liked: false,
      hobbies: ['Dragon Slaying', 'Jousting', 'Sword Fighting', 'Hiking', 'Crafts'],
      attributes: ['Programmer', 'Crack Addict', 'Shoe Salesman', 'Jewish', 'Anti-semitic'],
      activity: 'I just came across a brick of "flour". Meet me @5 to get destroyed. Ya.',
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
