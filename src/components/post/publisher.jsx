import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
const Publisher = ({publisher, currentpost}) => {
return useObserver(() => (
<>
<section className = "post__by">
    <h2 className = "hidden">Posted by</h2>
    <div className = "postby__wrappers">
    <img className = "postby__image" src={publisher.pic} alt=""/>
    <div className = "postby__wrapper">
    <p className = "postby__name"> {publisher.name}</p>
    <p className = "postby__title">{publisher.description}</p>
    <a className = "postby__link" href="d"> follow </a>
    </div>
  </div>
  <div className = "like__wrappers">
  <a className = "postby__link linkcollect" href="d">Add to collection</a>
  <button onClick = {e => currentpost.addLike()} className = "postby__link linkcollect linkheart"  href="d"><p className = "like">&hearts; Like</p></button>
  </div>
  </section>
</>))
}
Publisher.propTypes = {
  currentpost: PropTypes.object.isRequired,
  store: PropTypes.object
};

export default Publisher;