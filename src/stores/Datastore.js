import {Post, MOODS} from '../models/Post';
import User from '../models/User';
import {observable, decorate, configure, action, computed} from 'mobx';


class DataStore {

    constructor() {
      this.posts = [
        new Post({user: new User({name: "EagleVisionJSX", description: "Nothing magical escapes my eyesight", pic: "assets/svg/account-icon4.svg"}), picture: 'assets/webp/landscape_example.webp', categorie: 'Nature Life', location: 'China,Beijing', description: 'Trees in the mist', tags: ['trees', 'mist','sunrise']}),
        new Post({user: new User({name: "SilenceOfTheTown", description: "A proud new york photographer", pic: "assets/svg/account-icon3.svg"}), picture: 'assets/webp/landscape_example2.webp', categorie: 'City Life', location: 'USA, new york', description: 'Central Park and snow', tags: ['park', 'snow']}),
        new Post({user: new User({name: "EpicGamer420", description: "A gamer by heart", pic: "assets/svg/account-icon2.svg"}), picture: 'assets/webp/landscape_example3.webp', categorie: 'Digital', location: 'Uncharted 4', description: 'Hanging on tight', tags: ['adventure', 'digital', 'desert', 'village']})
      ];
      
  
      this.currentIndex = 0;
      this.currentPost = this.posts[0];
    }
  
  
    addPost(user, picture, categorie, location, description, tags) {
      this.posts.push(new Post({user, picture, categorie, location, description, tags}));
    }
  
    changeCurrent(post){
      this.currentPost = post;
    }
  
    CurrentPostUp = () =>{
    const number = DataStore;
    console.log(number);
    if (this.currentIndex != this.posts.length-1){
        this.currentIndex += 1;
    }
    else{
        this.currentIndex = 0;
    }
    this.changeCurrent(this.posts[this.currentIndex])
  
    }
  
    CurrentPostDown = () => {
      if (DataStore.currentIndex != 0){
        DataStore.currentIndex -= 1;
      }
      else{
        DataStore.currentIndex = this.posts.length-1;
      }
      this.changeCurrent(this.posts[this.currentIndex])
    }

  }
  
  decorate (DataStore, {
    posts: observable,
    currentPost: observable,
    currentIndex: observable,
    addPost: action,
    changeCurrent: action,
    CurrentPostUp: action,
    CurrentPostDown: action,
  });
  
  configure({enforceActions: 'observed'});
  
  export default DataStore;
  