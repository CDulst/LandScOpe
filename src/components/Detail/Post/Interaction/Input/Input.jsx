import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Comment from '../../../../../models/Comment';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import {useStores} from "../../../../../hooks/index";
import style from "./input.module.css";



const Inputcomment = () => {
const [content, setContent] = useState("");
const {dataStore,uiStore} = useStores();
const handleChangeinput = e =>{
    console.log(e.target.value);
    setContent(e.target.value);
  }
  

  const submitcheck = e =>{
    e.preventDefault();
    if (content != ""){
     new Comment ({
       user: uiStore.currentUser,
       content: content,
       post: dataStore.currentPost
     })
     setContent("");
    }
  }
return useObserver(() => (
<>
<article className = {style.writecomment}>
  <h3 className = {style.hidden}>Write a comment</h3>
  <form onSubmit={e => submitcheck(e)} className = {style.writecomment__form} action="" method = "GET">
  <label className = {style.writecomment__label} htmlFor="comment"> Write a comment </label>
  <input className = {style.writecomment__input} type="text" name="comment" id="comment" value = {content} onChange= {e => handleChangeinput(e)} />
  </form>
  </article>
</>))
}

Inputcomment.propTypes = {
  store: PropTypes.object.isRequired,
  currentpost: PropTypes.object.isRequired,
};

export default Inputcomment;