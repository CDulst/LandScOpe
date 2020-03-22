import Post from '../models/Post';
import User from '../models/User';
import {observable, decorate, configure, action, computed} from 'mobx';
import {Redirect} from "react-router-dom";
import {v4} from 'uuid';

class DataStore {

    constructor() {
      this.posts = [
      ];
      this.users = [
      ];
      this.currentIndex = 0;
      this.currentPost = this.posts[this.currentIndex];
    }
  
    addPost(post) {
      this.posts.push(post);
    }
  

    
  addUser(user) {
    this.users.push(user);
  }
  
    changeCurrent(key){
      const post = this.posts.find(item=>{
      return item.key === key
      });
      if (post === undefined){
        this.currentPost = this.posts[this.currentIndex];
      }
      else{
        this.currentPost = post;
        const position = this.posts.indexOf(post);
        this.currentIndex = position;
      }
    }

  

    get nextkey(){
     if (this.currentIndex !== this.posts.length-1){
      return this.posts[this.currentIndex + 1].key;
     }
     else{
       return this.posts[0].key;
     }
    }
    get previouskey(){
      if (this.currentIndex !== 0){
        return this.posts[this.currentIndex - 1].key;
       }
       else{
         return this.posts[this.posts.length-1].key;
       }
    }

  
  

  }
  
  decorate (DataStore, {
    posts: observable,
    currentPost: observable,
    currentIndex: observable,
    users:observable,
    addPost: action,
    addUser: action,
    changeCurrent: action,
    
  });
  
  configure({enforceActions: 'observed'});
  
  export default DataStore;
  