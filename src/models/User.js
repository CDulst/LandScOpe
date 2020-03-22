import {observable, decorate, configure, action, computed} from 'mobx';


class User {
  constructor ({id, name, description, pic, store}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.store = store;
    this.store.addUser(this);
    this.pic = pic;
    this.comments = []
    this.posts = []
  }

linkComment(comment){
  !this.comments.includes(comment) && this.comments.push(comment);
}
linkPost(post){
  !this.posts.includes(post) && this.posts.push(post);
}
 

}

decorate(User, {
  id: observable,
  name: observable,
  pic: observable,
  description: observable,
  store: observable,
  comments: observable,
  posts: observable,
  linkComment: action,
  linkPost: action

});

configure({enforceActions: 'observed'});

export default User;
