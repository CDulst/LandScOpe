import Comment from './Comment.js';
import {observable, decorate, configure, action, computed} from 'mobx';



const MOODS = [
  [
    "Confident","assets/svg/moods/Confident.svg"
  ],
  [
    "Dreamy","assets/svg/moods/Dreamy.svg"
  ],
  [
    "Empowered","assets/svg/moods/Empowered.svg"
  ],
  [
    "Excited","assets/svg/moods/Excited.svg"
  ],
  [
    "Lonely","assets/svg/moods/Lonely.svg"
  ],
  [
    "Overwhelmed","assets/svg/moods/Overwhelmed.svg"
  ],
  [
    "Relaxed","assets/svg/moods/Relaxed.svg"
  ],
  [
    "Romantic","assets/svg/moods/Romantic.svg"
  ],
  [
    "Scared","assets/svg/moods/Scared.svg"
  ],
  
    
]


class Post {
  constructor ({user, picture, categorie, location, likes = 0, description, tags, key}) {
    this.user = user;
    this.picture = picture;
    this.categorie = categorie;
    this.location = location;
    this.description = description;
    this.tags = tags;
    this.key = key;
    this.likes = likes;
    this.comments = [];
    this.mood = {
      Unsettled: 0,
      Dreamy: 0,
      Scared: 0,
      Relaxed: 0,
      Excited: 0,
      Tense: 0,
      Lonely: 0,
      Romantic: 0,
      Ominous: 0,
      Empowered: 0,
      Confident: 0,
      Overwhelmed: 0,
    };
  }

  addLike() {
    this.likes += 1;
  }

  updateMood(moodkey) {
    this.mood[moodkey] += 1;
  }

  decreaseMood(moodkey) {
    this.mood[moodkey] -= 1;
  }

  removeLike() {
    this.likes -= 1;
  }

  addComment(u, con) {
    this.comments.push(new Comment({user: u, content:con}));
  }

  get commentsLength() {
    return this.comments.length;
  }



  


}

decorate(Post, {
  user: observable,
  picture: observable,
  categorie: observable,
  location: observable,
  description: observable,
  tags: observable,
  likes: observable,
  comments: observable,
  mood: observable,
  addLike: action,
  removeLike: action,
  addComment: action,
  updateMood: action,
  decreaseMood: action,
  commentsLength: computed
});

configure({enforceActions: 'observed'});


export {MOODS,Post};
