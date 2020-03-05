

import {observable, decorate, configure, action, computed} from 'mobx';


class UiStore {

    constructor() {
      this.commentMessage = "";
    }
  
  
    changeCommentMessage(comment){
    this.commentMessage = comment;
    }
    
      
  
  }
  
  
  
  decorate (UiStore, {
    commentMessage: observable,
    changeCommentMessage: action
  });
  
  configure({enforceActions: 'observed'});
  
  export default UiStore;
  