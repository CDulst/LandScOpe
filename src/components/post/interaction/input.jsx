import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
const Inputcomment = ({store,currentpost}) => {

const handleChangeinput = e =>{
    console.log(e.target.value);
    store.changeCommentMessage(e.target.value);
  }
  

  const submitcheck = e =>{
    e.preventDefault();
    if (store.commentMessage != ""){
      currentpost.addComment("Casey Dulst",store.commentMessage);
      store.changeCommentMessage("");
    }
  }
return useObserver(() => (
<>
<article className = "writecomment">
  <h3 className = "hidden">Write a comment</h3>
  <form onSubmit={e => submitcheck(e)} className = "writecomment__form" action="" method = "GET">
  <label className = "writecomment__label" htmlFor="comment"> Write a comment </label>
  <input className = "writecomment__input" type="text" name="comment" id="comment" value = {store.commentMessage} onChange= {e => handleChangeinput(e)} />
  </form>
  </article>
</>))
}

Inputcomment.propTypes = {
  store: PropTypes.object.isRequired,
  currentpost: PropTypes.object.isRequired,
};

export default Inputcomment;