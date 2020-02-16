import './style.css';
import {autorun, action, decorate} from 'mobx';
import store from './js/Store';




const init = () => {
  window.store = store;
  autorun(() => {
  });
};

init();
