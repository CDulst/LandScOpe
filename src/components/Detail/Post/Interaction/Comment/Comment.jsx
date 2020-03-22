import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import style from './comment.module.css';
const Comment = ({comment, user, content, likes}) => {

const handleClickComboButton = (e,item) =>{
item.addLike();
}

return useObserver(() => (
<>
<div className = {style.comment} >
  <div className = {`${style.comment__wrappers} ${style.nm__wrapper}`}>
  <div className = {style.comment__wrapper}>
  <img className = {style.comment__image} src="assets/svg/account-icon.svg" alt="account"/>
  <p className = {style.comment__name}> {user.name} </p>
  </div>
  <p className = {style.comment__text}> {content} </p>
  </div>
  <button className = {style.comment__button} onClick= {e => handleClickComboButton(e, comment)}>
  <div className = {style.comment__wrappers}>
  <img className = {style.comment__like} src="assets/svg/heart.svg" alt=""/>
  <p className = {style.like__number}>{likes}</p>
  </div>
</button>
  </div>
</>))
}

export default Comment;