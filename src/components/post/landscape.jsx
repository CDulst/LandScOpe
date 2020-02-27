import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
const Landscape = ({postinfo, posttags, store}) => {
return useObserver(() => (
<>
<section className = "landscape" style = {{backgroundImage: `url(${store.currentPost.picture})`}}>
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
  <button onClick= {store.CurrentPostDown}><img className = "arrow" src="assets/svg/arrowleft.svg" alt=""/></button>
  <button onClick= {store.CurrentPostUp}><img className = "arrow" src="assets/svg/arrowright.svg" alt=""/></button>
  </div>
  <div className = "nature__wrapper">
  <p className = "naturelife"> {postinfo.categorie} </p>
  <div className = "tags__wrapper">
  {posttags.map(tag => (
    <div className = "tag__wrapper">
    <img className = "tag__image" src="assets/svg/tag.svg" alt=""/>
    <p className = "tag__para"> {tag} </p>
    </div>
  ))}
  </div>
  </div>
  </section>
</>))
}

export default Landscape;