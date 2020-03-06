import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import PropTypes from 'prop-types';
import Mood from './interaction/mood';
import Comment from './interaction/comment';
import {MOODS} from '../../../models/Post';
import Inputcomment from './interaction/input';
import {useStores} from "../../../hooks/index";
const Interaction = () => {
const {dataStore} = useStores();
const moods = MOODS;
   
return useObserver(() => (
<>
<section className = "commentmood">
  <h2 className = "hidden"> mood and comments </h2>
  <article className = "mood">
  <h3 className = " cm__title mood__title"> This landscape makes me feel </h3>
  <p className = "mood__points"><span className = "mood__number">3</span> Points left</p>
  {moods.map(mood => (
  <Mood key = {mood[1]} currentpost = {dataStore.currentPost} moodemoji = {mood[1]} moodtitle = {mood[0]} moodnumber = {dataStore.currentPost.mood[mood[0]]} />
  ))}
  </article>
  <article className = "comments">
  <h3 className = " cm__title comments__title"> <span className = "comment__number">{dataStore.currentPost.commentsLength}</span> Comments </h3>
  {dataStore.currentPost.comments.map(comment => (
  <Comment comment = {comment} user = {comment.user} content = {comment.content} likes = {comment.likes}/>
  ))}
  </article>
  <Inputcomment/>
  </section>
</>))
}

Interaction.propTypes = {
  moods: PropTypes.array.isRequired,
  currentpost: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Interaction;