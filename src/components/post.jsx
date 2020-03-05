import React from 'react';
import ReactDOM from 'react-dom';
import {useObserver} from 'mobx-react-lite';
import {MOODS} from '../models/Post'
import Publisher from './post/publisher';
import Landscape from './post/landscape';
import Interaction from './post/interaction';
import PropTypes from 'prop-types';
const Post= () => {

    
    return useObserver(() => (
    <>

<main className = "root">
  <Publisher/>
  <Landscape/>
  <Interaction/>
</main>
  </>
    ))

}

Post.propTypes = {
  currentpost: PropTypes.object,
  store: PropTypes.object
};


export default Post;