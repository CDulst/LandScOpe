import './style.css';
import {autorun} from 'mobx';
import store from './js/Store';




const init = () => {
  window.store = store;
  autorun(() => {
  });
};

init();
