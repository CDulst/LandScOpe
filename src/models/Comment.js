import {observable, decorate, configure, action, computed} from 'mobx';


class Comment {
  constructor ({user, content, likes = 0, post}) {
    this.user = user;
    this.user.linkComment(this);
    this.content = content;
    this.likes = likes;
    this.post = post;
    this.post.linkComment(this);
    
  }


  

  addLike() {
    this.likes += 1;
  }

  removeLike() {
    this.likes -= 1;
  }

}

decorate(Comment, {
  user: observable,
  content: observable,
  likes: observable,
  post: observable,
  addLike: action,
  removeLike: action
});

configure({enforceActions: 'observed'});

export default Comment;
