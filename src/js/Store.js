import Message from './Message';
import {observable, decorate, configure, action, computed} from 'mobx';

class Store {

  constructor() {
    this.posts = [];
  }


  addPost(content, user) {
    this.messages.push(new Message({content, user}));
  }

}

decorate (Store, {
  posts: observable,
  addPost: action,
});

configure({enforceActions: 'observed'});

const store = new Store();
export default store;
