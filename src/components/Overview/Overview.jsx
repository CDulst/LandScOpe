import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import LandItem from './Landitem/Landitem';
import {useStores} from "../../hooks/index";
import style from "./overview.module.css";
import {Link} from 'react-router-dom';

const Overview = () => {
    const {dataStore} = useStores();
    return useObserver(() => (
<>
<article className = {style.overview}>
<h2 className = {style.hidden}>Overview</h2>
<div className = {style.addButton__wrapper}>
<Link className = {style.add__button} to = "/add"> <img src="assets/png/addSymbol.png" alt=""/> <span className = {style.addButton__span}>New Post</span></Link>
</div>
{dataStore.posts.map(post => (
<LandItem key = {post.key} post = {post}/>
))}
</article>
 </>
    ))

  }
  
  export default Overview;