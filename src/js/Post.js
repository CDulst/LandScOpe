import Comment from './Comment.js';
import {observable, decorate, configure, action, computed} from 'mobx';


class Post {
  constructor ({user, picture, categorie, location, likes = 0, description, tags}) {
    this.user = user;
    this.picture = picture;
    this.categorie = categorie;
    this.location = location;
    this.description = description;
    this.tags = tags;
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

  addComment(user, content) {
    this.comments.push(new Comment({user, content}));
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
  addlike: action,
  removeLike: action,
  addComment: action,
  updateMood: action,
  decreaseMood: action,
  commentsLength: computed
});

configure({enforceActions: 'observed'});


export default Post;
