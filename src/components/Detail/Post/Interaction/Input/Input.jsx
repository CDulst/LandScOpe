import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import {useStores} from "../../../../../hooks/index";
import style from "./input.module.css";

const Inputcomment = () => {
  const {dataStore,uiStore} = useStores();
const currentpost = dataStore.currentPost
const handleChangeinput = e =>{
    console.log(e.target.value);
    uiStore.changeCommentMessage(e.target.value);
  }
  

  const submitcheck = e =>{
    e.preventDefault();
    if (uiStore.commentMessage != ""){
      currentpost.addComment("Casey Dulst",uiStore.commentMessage);
      uiStore.changeCommentMessage("");
    }
  }
return useObserver(() => (
<>
<article className = {style.writecomment}>
  <h3 className = {style.hidden}>Write a comment</h3>
  <form onSubmit={e => submitcheck(e)} className = {style.writecomment__form} action="" method = "GET">
  <label className = {style.writecomment__label} htmlFor="comment"> Write a comment </label>
  <input className = {style.writecomment__input} type="text" name="comment" id="comment" value = {uiStore.commentMessage} onChange= {e => handleChangeinput(e)} />
  </form>
  </article>
</>))
}

Inputcomment.propTypes = {
  store: PropTypes.object.isRequired,
  currentpost: PropTypes.object.isRequired,
};

export default Inputcomment;