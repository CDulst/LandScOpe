import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import Mood from './interaction/mood';
import Comment from './interaction/comment'
import Inputcomment from './interaction/input'
const Interaction = ({moods, currentpost, store}) => {
  
      
return useObserver(() => (
<>
<section className = "commentmood">
  <h2 className = "hidden"> mood and comments </h2>
  <article className = "mood">
  <h3 className = " cm__title mood__title"> This landscape makes me feel </h3>
  <p className = "mood__points"><span class = "mood__number">3</span> Points left</p>
  {moods.map(mood => (
  <Mood currentpost = {currentpost} moodemoji = {mood[1]} moodtitle = {mood[0]} moodnumber = {currentpost.mood[mood[0]]} />
  ))}
  </article>
  <article className = "comments">
  <h3 className = " cm__title comments__title"> <span class = "comment__number">{currentpost.commentsLength}</span> Comments </h3>
  {currentpost.comments.map(comment => (
  <Comment comment = {comment} user = {comment.user} content = {comment.content} likes = {comment.likes}/>
  ))}
  
  </article>
  <Inputcomment store = {store} currentpost = {currentpost} />
  </section>
</>))
}

export default Interaction;