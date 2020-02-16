import Post from './Post';
import {observable, decorate, configure, action, computed} from 'mobx';

class Store {

  constructor() {
    this.posts = [];
  }


  addPost(user,picture,categorie,location,description,tags) {
  this.posts.push(new Post({user,picture,categorie,location,description,tags}));
  }

}

decorate (Store, {
  posts: observable,
  addPost: action,
});

configure({enforceActions: 'observed'});

const store = new Store();
export default store;
