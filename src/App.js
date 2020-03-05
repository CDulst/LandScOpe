import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {useObserver} from 'mobx-react-lite';
import Header from './components/header';
import Post from './components/post';


const App = () => {

 

  return useObserver(() => (
    <>
   <Header/>
   <Post/>
   </>
  ))
}

export default App;
