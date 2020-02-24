import React from 'react';
import ReactDOM from 'react-dom';
import {Post, MOODS} from './js/Post';
import store from './js/Store';
import './style.css';
import {useObserver} from 'mobx-react-lite';
const App = () => {
  return useObserver(() => (
    <>
    <header>
    <h1 className = "hidden">Landscope</h1>
    <nav className= "navigator">
    <button className = "header__hamburger">
     <img className = "header__hamburger--img" src="assets/svg/hamburger.svg" alt=""/>
    </button>
    <div className = "header__wrapper">
    <img className = "header__logo" src="assets/svg/logo.svg" alt=""/>
    <ul className = "nav__items">
    <div className = "nav__wrapper home">
        <img src="assets/svg/seperator.svg" alt=""/>
        <li className = "nav__item"><a className = "nav__link" href = "D" alt = "" >HOME</a></li>
    </div>
    <div class = "nav__wrapper explore">
        <img src="assets/svg/seperator.svg" alt=""/>
        <li className = "nav__item"><a className = "nav__link" href = "D" alt = "" >EXPLORE</a></li>
    </div>
    <div class = "nav__wrapper collection">
        <img src="assets/svg/seperator.svg" alt=""/>
        <li className = "nav__item"><a className = "nav__link" href = "D" alt = "" >COLLECTION</a></li>
    </div>
    </ul>
</div>
<div className = "accounts__wrappers">
<a href="D" className = "account__upload" alt = "">UPLOAD</a>
<div className = "account__wrappers">
<div className = "account__wrapper">
<a href="D" class = "account__link"><img className = "account__img"  src="assets/svg/account-icon.svg" alt=""/></a>
</div>
<div className = "account__wrapper settings__wrapper">
    <button className = "messagebutton">
        <img src="assets/svg/messages-icon.svg" alt=""/>
    </button>
    <button className = "settingsbutton">
        <picture className= "header__settingsicon">
        <img src="assets/svg/settings-icon.svg" alt=""/>
        </picture>
    </button>
    </div>
</div>
</div>
    </nav>
    
    </header>
    <main className = "root">
  <section className = "post__by">
    <h2 className = "hidden">Posted by</h2>
    <div className = "postby__wrappers">
    <img className = "postby__image" src={store.currentPost.user.pic} alt=""/>
    <div className = "postby__wrapper">
    <p className = "postby__name"> {store.currentPost.user.name}</p>
    <p className = "postby__title">{store.currentPost.user.description}</p>
    <a className = "postby__link" href=" "> follow </a>
    </div>
  </div>
  <div className = "like__wrappers">
  <a className = "postby__link linkcollect" href="d">Add to collection</a>
  <a className = "postby__link linkcollect linkheart" href="d"><p class = "like">&hearts; Like</p></a>
  </div>
  </section>
  <section className = "landscape" style = {{backgroundImage: `url(${store.currentPost.picture})`}}>
  <div className = "image__wrappers">
  <div className = "image__wrapper">
  <h2 className = "location__name">{store.currentPost.description}</h2>
  <div className = "location__wrapper">
  <img src="assets/svg/locationicon.svg" alt=""/>
  <p className = "location__location">{store.currentPost.location}</p>
  </div>
  </div>
  <div className = "image__wrapper icon__wrappers">
  <div className = "icon__wrapper">
  <img className = "icon__image" src="assets/svg/seenicon.svg" alt=""/>
  <p className = "icon__para">1</p>
  </div>
  <div className = "icon__wrapper">
    <img className = "icon__image icon__heart" src="assets/svg/likedicon.svg" alt=""/>
    <p className = "icon__para">{store.currentPost.likes}</p>
    </div>
    <div className = "icon__wrapper">
      <img className = "icon__image icon__comment" src="assets/svg/commentedicon.svg" alt=""/>
      <p className = "icon__para">{store.currentPost.commentsLength}</p>
      </div>
  </div>
  </div>
  <div className = "image__wrappers arrow__wrapper">
  <button onClick= {store.CurrentPostDown}><img className = "arrow" src="assets/svg/arrowleft.svg" alt=""/></button>
  <button onClick= {store.CurrentPostUp}><img className = "arrow" src="assets/svg/arrowright.svg" alt=""/></button>
  </div>
  <div className = "nature__wrapper">
  <p className = "naturelife"> {store.currentPost.categorie} </p>
  <div className = "tags__wrapper">
  {store.currentPost.tags.map(tag => (
    <div className = "tag__wrapper">
    <img className = "tag__image" src="assets/svg/tag.svg" alt=""/>
    <p className = "tag__para"> {tag} </p>
    </div>
  ))}
  </div>
  </div>
  </section>
  <section className = "commentmood">
  <h2 className = "hidden"> mood and comments </h2>
  <article className = "mood">
  <h3 className = " cm__title mood__title"> This landscape makes me feel </h3>
  <p className = "mood__points"><span class = "mood__number">3</span> Points left</p>
  {MOODS.map(mood => (
    <button className = "buttonall">
    <div className = "mood__item">
    <div className = "item__wrapper">
    <img className = "item__emoji" src={mood[1]} alt=""/>
  <p className = "item__title">{mood[0]}</p>
    </div>
    <p className = "item__number">0</p>
    </div>
    </button>
  ))}
  </article>
  <article className = "comments">
  <h3 className = " cm__title comments__title"> <span class = "comment__number">{store.currentPost.commentsLength}</span> Comments </h3>
  {store.currentPost.comments.map(comment => (
    <div className = "comment">
  <div className = "comment__wrappers nm__wrapper">
  <div className = "comment__wrapper">
  <img className = "comment__image" src="assets/svg/account-icon.svg" alt="account"/>
  <p className = "comment__name"> comment.user </p>
  </div>
  <p className = "comment__text"> comment.content </p>
  </div>
  <button className = "comment__button">
  <div className = "comment__wrappers">
  <img className = "comment__like" src="assets/svg/heart.svg" alt=""/>
  <p className = "like__number">comment.likes</p>
  </div>
</button>
  </div>
  ))}
  
  </article>
  <article className = "writecomment">
  <h3 className = "hidden">Write a comment</h3>
  <form className = "writecomment__form" action="" method = "GET">
  <label className = "writecomment__label" for=""> Write a comment </label>
  <input className = "writecomment__input" type="text" name="comment" id="comment"/>
  <button className= "writecomment__button">Send 	&rarr;</button>
  </form>
  </article>
  </section>
  </main>
    </>
  ))
}


ReactDOM.render(<App />, document.getElementById('root'));