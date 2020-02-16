import {observable, decorate, configure, action, computed} from 'mobx';


class Comment {
  constructor ({user,content,likes = 0}){
    this.user = user;
    this.content = content;
    this.likes = likes;
  }

  addLike(){
    this.likes += 1;
  }

  removeLike(){
    this.likes -= 1;
  }

}

decorate(Comment, {
user: observable,
content: observable,
likes: observable,
addLike: action,
removeLike: action
});

configure({enforceActions: 'observed'});

export default Comment;
