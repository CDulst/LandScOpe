import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import {Link} from 'react-router-dom';


const LandItem = ({post}) => {
    return useObserver(() => (
<>
<section className = "overview__item" style = {{backgroundImage: `url(${post.picture})`}}>
<Link className = "overviewItem__container" to="/Detail">
<div className = "overviewItem__wrapper">
<img src={post.user.pic} alt="account"/>
<h3 className = "overviewItem__text overviewItem__title">{post.description} </h3>
</div>
<div className = "overviewItem__wrapper spacebetween">
<p className = "overviewItem__text"> Placeholder </p>
<p className = "overviewItem__text"> {post.categorie} </p>
</div>
</Link>
</section>
 </>
 ))
 }
  
  export default LandItem;