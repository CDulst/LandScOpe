import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import {Link} from 'react-router-dom';
import style from './landitem.module.css'



const LandItem = ({post}) => {
return useObserver(() => (
<>
<section className = {style.overview__item} style = {{backgroundImage: `url(${post.picture})`}}>
<Link className = {style.overviewItem__container} to={post.key}>
<div className = {style.overviewItem__wrapper}>
<img src={post.user.pic} alt="account"/>
<h3 className = {`${style.overviewItem__text} ${style.overviewItem__title}`}>{post.description} </h3>
</div>
<div className = {`${style.overviewItem__wrapper} ${style.spacebetween}`}>
<p className = {style.overviewItem__text}> Placeholder </p>
<p className = {style.overviewItem__text}> {post.categorie} </p>
</div>
</Link>
</section>
 </>
 ))
 }
  
  export default LandItem;