import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import Mood from './Mood/Mood';
import Comment from './Comment/Comment';
import style from "./interaction.module.css";
import {MOODS} from '../../../../models/Post';
import Inputcomment from './Input/Input';
import {useStores} from "../../../../hooks/index";
const Interaction = () => {
const {dataStore} = useStores();
const moods = MOODS;
   
return useObserver(() => (
<>
<section className = {style.commentmood}>
  <h2 className = {style.hidden}> mood and comments </h2>
  <article className = {style.mood}>
  <h3 className = {`${style.cm__title} ${style.mood__title}`}> This landscape makes me feel </h3>
  <p className = {style.mood__points}><span className = {style.mood__number}>3</span> Points left</p>
  {moods.map(mood => (
  <Mood key = {mood[1]} currentpost = {dataStore.currentPost} moodemoji = {mood[1]} moodtitle = {mood[0]} moodnumber = {dataStore.currentPost.mood[mood[0]]} />
  ))}
  </article>
  <article className = {style.comments}>
  <h3 className = {`${style.cm__title} ${style.comments__title}`}> <span className = {style.comment__number}>{dataStore.currentPost.commentsLength}</span> Comments </h3>
  {dataStore.currentPost.comments.map(comment => (
  <Comment comment = {comment} user = {comment.user} content = {comment.content} likes = {comment.likes}/>
  ))}
  </article>
  <Inputcomment/>
  </section>
</>))
}

export default Interaction;