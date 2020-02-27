import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {useObserver} from 'mobx-react-lite';
import Header from './components/header';
import Post from './components/post';

const App = ({store}) => {

 

  return useObserver(() => (
    <>
   <Header/>
   <Post currentpost = {store.currentPost} store = {store}/>
    </>
  ))
}

export default App;
