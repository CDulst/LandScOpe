import {observable, decorate, configure, action, computed} from 'mobx';


class User {
  constructor ({name, description, pic}) {
    this.name = name;
    this.description = description;
    this.pic = pic;
  }

 

}

decorate(Comment, {
  name: observable,
  pic: observable,
  description: observable,

});

configure({enforceActions: 'observed'});

export default User;
