import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import {useStores} from "../../../../hooks/index";
import style from "./publisher.module.css"

const Publisher = () => {
  const {dataStore} = useStores();
return useObserver(() => (
<>
<section className = {style.post__by}>
    <h2 className = {style.hidden}>Posted by</h2>
    <div className = {style.postby__wrappers}>
    <img className = {style.postby__image} src={dataStore.currentPost.user.pic} alt=""/>
    <div className = {style.postby__wrapper}>
    <p className = {style.postby__name}> {dataStore.currentPost.user.name}</p>
    <p className = {style.postby__title}>{dataStore.currentPost.user.description}</p>
    <a className = {style.postby__link} href="d"> follow </a>
    </div>
  </div>
  <div className = {style.like__wrappers}>
  <a className = {`${style.postby__link} ${style.linkcollect}`} href="d">Add to collection</a>
  <button onClick = {e => dataStore.currentPost.addLike()} className = {`${style.postby__link} ${style.linkcollectø} ${style.linkheart}`}  href="d"><p className = "like">&hearts; Like</p></button>
  </div>
  </section>
</>))
}
Publisher.propTypes = {
  currentpost: PropTypes.object.isRequired,
  store: PropTypes.object
};

export default Publisher;