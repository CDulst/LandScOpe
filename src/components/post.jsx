import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import {MOODS} from '../models/Post'
import Publisher from './post/publisher';
import Landscape from './post/landscape';
import Interaction from './post/interaction';
const Post= ({currentpost, store}) => {

    
    return useObserver(() => (
    <>
    {console.log(store)}
<main className = "root">
  <Publisher publisher = {currentpost.user} currentpost = {currentpost}/>
  <Landscape postinfo = {currentpost} posttags = {currentpost.tags} store = {store} />
  <Interaction moods = {MOODS} currentpost = {currentpost} store = {store}/>
</main>
  </>
    ))
}
export default Post;