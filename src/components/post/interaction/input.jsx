import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
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
  <label className = "writecomment__label" for=""> Write a comment </label>
  <input className = "writecomment__input" type="text" name="comment" id="comment" value = {store.commentMessage} onChange= {e => handleChangeinput(e)} />
  </form>
  </article>
</>))
}

export default Inputcomment;