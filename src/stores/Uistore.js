

import {observable, decorate, configure, action, computed} from 'mobx';


class UiStore {

    constructor() {
      this.commentMessage = "";
      this.Description = "";
      this.Location = "";
      this.Category = "city life";
      this.Tag = "";
      this.Image = "assets/webp/landscape_example7.webp"
      this.AddTags = [];
      this.currentUser = "";
    }
  
  
    change(item,value){
    this[item] = value;
    console.log(this[item]);
    }


    AddTag(tag){
      this.AddTags.push(tag);
      this.Tag = "";
    }

    RemoveTag(tag){
      const index = this.AddTags.indexOf(tag);
      console.log(index);
      this.AddTags.splice(index,1)
    }

    setCurrentUser(user){
      this.currentUser = user;
    }

    changeCommentMessage(comment){
    this.commentMessage = comment;
    }
    
      
  
  }
  
  
  
  decorate (UiStore, {
    commentMessage: observable,
    Description: observable,
    Location: observable,
    Category: observable,
    Tag: observable,
    Image: observable,
    AddTags: observable,
    currentUser: observable,
    changeCommentMessage: action,
    change: action,
    AddTag: action,
    RemoveTag: action,
    setCurrentUser: action
  });
  
  configure({enforceActions: 'observed'});
  
  export default UiStore;
  