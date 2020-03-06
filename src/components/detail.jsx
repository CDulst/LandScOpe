import React from 'react';
import {useObserver} from 'mobx-react-lite';
import Post from './detail/post';


const Detail = () => {
  return useObserver(() => (
    <>
   <Post/>
   </>
  ))
}

export default Detail;