import React from 'react';
import {useObserver} from 'mobx-react-lite';
import Post from './detail/post';
import {useStores} from "../hooks/index";
import{useParams} from "react-router-dom"
import{Redirect} from "react-router-dom";
const Detail = () => {
  const {dataStore} = useStores();
  const {key} = useParams();
  return useObserver(() => (
   <>
   {dataStore.changeCurrent(key)}
   <Post/>
   </>
  ))
}

export default Detail;