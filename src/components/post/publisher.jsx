import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import {useStores} from "../../hooks/index";

const Publisher = () => {
  const {dataStore} = useStores();
return useObserver(() => (
<>
<section className = "post__by">
    <h2 className = "hidden">Posted by</h2>
    <div className = "postby__wrappers">
    <img className = "postby__image" src={dataStore.currentPost.user.pic} alt=""/>
    <div className = "postby__wrapper">
    <p className = "postby__name"> {dataStore.currentPost.user.name}</p>
    <p className = "postby__title">{dataStore.currentPost.user.description}</p>
    <a className = "postby__link" href="d"> follow </a>
    </div>
  </div>
  <div className = "like__wrappers">
  <a className = "postby__link linkcollect" href="d">Add to collection</a>
  <button onClick = {e => dataStore.currentPost.addLike()} className = "postby__link linkcollect linkheart"  href="d"><p className = "like">&hearts; Like</p></button>
  </div>
  </section>
</>))
}
Publisher.propTypes = {
  currentpost: PropTypes.object.isRequired,
  store: PropTypes.object
};

export default Publisher;