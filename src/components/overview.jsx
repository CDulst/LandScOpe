import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import LandItem from './overview/LandItem';
import {useStores} from "../hooks/index";

const Overview = () => {
    const {dataStore} = useStores();
    return useObserver(() => (
<>
<article className = "overview">
<h2 className = "hidden">Overview</h2>
<div className = "addButton__wrapper">
<button className = "add__button"> <img src="assets/png/addSymbol.png" alt=""/> <span class = "addButton__span">New Post</span></button>
</div>
{dataStore.posts.map(post => (
<LandItem post = {post}/>
))}
</article>
 </>
    ))

  }
  
  export default Overview;