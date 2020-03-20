

import {observable, decorate, configure, action, computed} from 'mobx';


class UiStore {

    constructor() {
      this.commentMessage = "";
      this.Description = "";
      this.Location = "";
      this.Category = "";
      this.AddTags = [ "Wind", "Swamp"];
      this.CATEGORIES = [
        'city life', 'nature life', 'digital', 'culture', 'movie shot'
      ]
    }
  
  
    change(item,value){
    this[item] = value;
    console.log(this[item]);
    }


    AddTag(tag){
      this.AddTags.push(tag);
    }

    RemoveTag(tag){
      this.AddTags.push(tag);
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
    AddTags: observable,
    CATEGORIES: observable,
    changeCommentMessage: action,
    change: action,
    AddTag: action,
    RemoveTag: action
  });
  
  configure({enforceActions: 'observed'});
  
  export default UiStore;
  