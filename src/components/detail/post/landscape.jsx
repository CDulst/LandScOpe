import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import {useStores} from "../../../hooks/index";
import {Link} from "react-router-dom"
const Landscape = () => {
  const {dataStore} = useStores();
  const postinfo = dataStore.currentPost;
  const posttags = postinfo.tags;
return useObserver(() => (
<>
<section className = "landscape" style = {{backgroundImage: `url(${dataStore.currentPost.picture})`}}>
  <div className = "image__wrappers">
  <div className = "image__wrapper">
  <h2 className = "location__name">{postinfo.description}</h2>
  <div className = "location__wrapper">
  <img src="assets/svg/locationicon.svg" alt=""/>
  <p className = "location__location">{postinfo.location}</p>
  </div>
  </div>
  <div className = "image__wrapper icon__wrappers">
  <div className = "icon__wrapper">
  <img className = "icon__image" src="assets/svg/seenicon.svg" alt=""/>
  <p className = "icon__para">1</p>
  </div>
  <div className = "icon__wrapper">
    <img className = "icon__image icon__heart" src="assets/svg/likedicon.svg" alt=""/>
    <p className = "icon__para">{postinfo.likes}</p>
    </div>
    <div className = "icon__wrapper">
      <img className = "icon__image icon__comment" src="assets/svg/commentedicon.svg" alt=""/>
      <p className = "icon__para">{postinfo.commentsLength}</p>
      </div>
  </div>
  </div>
  <div className = "image__wrappers arrow__wrapper">
  <Link to={dataStore.previouskey}><img className = "arrow" src="assets/svg/arrowleft.svg" alt=""/></Link>
  <Link to= {dataStore.nextkey}><img className = "arrow" src="assets/svg/arrowright.svg" alt=""/></Link>
  </div>
  <div className = "nature__wrapper">
  <p className = "naturelife"> {postinfo.categorie} </p>
  <div className = "tags__wrapper">
  {posttags.map(tag => (
    <div className = "tag__wrapper" key = {tag}>
    <img className = "tag__image" src="assets/svg/tag.svg" alt=""/>
    <p className = "tag__para"> {tag} </p>
    </div>
  ))}
  </div>
  </div>
  </section>
</>))
}

Landscape.propTypes = {
  postinfo: PropTypes.object.isRequired,
  posttags: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired
};


export default Landscape;