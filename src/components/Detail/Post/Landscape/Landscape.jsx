import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import style from './landscape.module.css';
import {useStores} from "../../../../hooks/index";
import {Link} from "react-router-dom"
const Landscape = () => {
  const {dataStore} = useStores();
  const postinfo = dataStore.currentPost;
  const posttags = postinfo.tags;
return useObserver(() => (
<>
<section className = {style.landscape} style = {{backgroundImage: `url(${dataStore.currentPost.picture})`}}>
  <div className = {style.image__wrappers}>
  <div className = {style.image__wrapper}>
  <h2 className = {style.location__name}>{postinfo.description}</h2>
  <div className = {style.location__wrapper}>
  <img src="assets/svg/locationicon.svg" alt=""/>
  <p className = {style.location__location}>{postinfo.location}</p>
  </div>
  </div>
  <div className = {`${style.image__wrapper} ${style.icon__wrappers}`}>
  <div className = {style.icon__wrapper}>
  <img className = {style.icon__image} src="assets/svg/seenicon.svg" alt=""/>
  <p className = {style.icon__para}>1</p>
  </div>
  <div className = {style.icon__wrapper}>
    <img className = {`${style.icon__image} ${style.icon__heart}`} src="assets/svg/likedicon.svg" alt=""/>
    <p className = {style.icon__para}>{postinfo.likes}</p>
    </div>
    <div className = {style.icon__wrapper}>
      <img className = {`${style.icon__image} ${style.icon__heart}`}src="assets/svg/commentedicon.svg" alt=""/>
      <p className = {style.icon__para}>{postinfo.commentsLength}</p>
      </div>
  </div>
  </div>
  <div className = {`${style.image__wrappers} ${style.arrow__wrapper}`}>
  <Link to={dataStore.previouskey}><img className = {style.arrow} src="assets/svg/arrowleft.svg" alt=""/></Link>
  <Link to= {dataStore.nextkey}><img className = {style.arrow}  src="assets/svg/arrowright.svg" alt=""/></Link>
  </div>
  <div className = {style.nature__wrapper}>
  <p className = {style.naturelife}> {postinfo.categorie} </p>
  <div className = {style.tags__wrapper}>
  {posttags.map(tag => (
    <div className = {style.tag__wrapper} key = {tag}>
    <img className = {style.tag__image} src="assets/svg/tag.svg" alt=""/>
    <p className = {style.tag__para}> {tag} </p>
    </div>
  ))}
  </div>
  </div>
  </section>
</>))
}

export default Landscape;