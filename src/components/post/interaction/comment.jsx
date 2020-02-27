import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
const Comment = ({comment, user, content, likes}) => {

const handleClickComboButton = (e,item) =>{
item.addLike();
}

return useObserver(() => (
<>
<div className = "comment">
  <div className = "comment__wrappers nm__wrapper">
  <div className = "comment__wrapper">
  <img className = "comment__image" src="assets/svg/account-icon.svg" alt="account"/>
  <p className = "comment__name"> {user} </p>
  </div>
  <p className = "comment__text"> {content} </p>
  </div>
  <button className = "comment__button" onClick= {e => handleClickComboButton(e, comment)}>
  <div className = "comment__wrappers">
  <img className = "comment__like" src="assets/svg/heart.svg" alt=""/>
  <p className = "like__number">{likes}</p>
  </div>
</button>
  </div>
</>))
}

export default Comment;