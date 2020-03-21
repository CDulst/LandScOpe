import {Post, MOODS} from '../models/Post';
import User from '../models/User';
import {observable, decorate, configure, action, computed} from 'mobx';
import {Redirect} from "react-router-dom";
import {v4} from 'uuid';

class DataStore {

    constructor() {
      this.posts = [
        new Post({user: new User({name: "EagleVisionJSX", description: "Nothing magical escapes my eyesight", pic: "assets/svg/account-icon4.svg"}), picture: 'assets/webp/landscape_example.webp', categorie: 'Nature Life', location: 'China,Beijing', description: 'Trees in the mist', tags: ['trees', 'mist','sunrise'], key: v4()}),
        new Post({user: new User({name: "SilenceOfTheTown", description: "A proud new york photographer", pic: "assets/svg/account-icon3.svg"}), picture: 'assets/webp/landscape_example2.webp', categorie: 'City Life', location: 'USA, new york', description: 'Central Park and snow', tags: ['park', 'snow'], key: v4()}),
        new Post({user: new User({name: "EpicGamer420", description: "A gamer by heart", pic: "assets/svg/account-icon2.svg"}), picture: 'assets/webp/landscape_example3.webp', categorie: 'Digital', location: 'Uncharted 4', description: 'Hanging on tight', tags: ['adventure', 'digital', 'desert', 'village'], key: v4()}),
        new Post({user: new User({name: "EagleVisionJSX", description: "Nothing magical escapes my eyesight", pic: "assets/svg/account-icon4.svg"}), picture: 'assets/webp/landscape_example4.webp', categorie: 'Culture', location: 'Egypt,gaza', description: 'The Mighty Pyramids', tags: ['desert', 'pyramids','sunlight'], key: v4()}),
        new Post({user: new User({name: "EpicGamer420", description: "A gamer by heart", pic: "assets/svg/account-icon2.svg"}), picture: 'assets/webp/landscape_example3.webp', categorie: 'Digital', location: 'Uncharted 4', description: 'Hanging on tight', tags: ['adventure', 'digital', 'desert', 'village'], key: v4()}),
      ];
      
  
      this.currentIndex = 0;
      this.currentPost = this.posts[this.currentIndex];
    }
  
  
    addPost(picture, categorie, location, description, tags) {
      const user = new User({name: "EagleVisionJSX", description: "Nothing magical escapes my eyesight", pic: "assets/svg/account-icon4.svg"})
      this.posts.push(new Post({user, picture, categorie, location, description, tags}));
      
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
    addPost: action,
    changeCurrent: action,
    
  });
  
  configure({enforceActions: 'observed'});
  
  export default DataStore;
  