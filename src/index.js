import './style.css';
import {autorun, action, decorate} from 'mobx';
import store from './js/Store';


const renderUnread = ({unreadLength}) => {
  document.querySelector('.unread').textContent = unreadLength > 0 ? `${unreadLength} unread message${unreadLength > 1 ? 's' : ''}` : '';
};

const renderMessages = store => {
  const $list = document.querySelector('.list');
  $list.innerHTML = '';
  store.messages.forEach(message => {
    $list.appendChild(
      createMessage(message, store));
  });
};

const createMessage = message => {
  const $li = document.createElement('li');
  $li.classList.add('bubble',
    message.unread ? 'bubble--unread' : 'bubble--read',
    message.user === 1 ? 'bubble--right' : 'bubble--left');
  $li.textContent = message.content;
  $li.addEventListener('click', () => message.setUnread(false));
  return $li;
};

const handleFormSubmit = (e, store) => {
  e.preventDefault();
  const content = e.currentTarget.content.value;
  if (content) {
    store.addMessage(content, 1);
    e.currentTarget.reset();
    renderMessages(store);
  }
};



const init = () => {
  window.store = store;
  autorun(() => {
    renderMessages(store);
    renderUnread(store);
  });
  store.addMessage('hey', 1);
  store.addMessage('hallo', 2);
  store.addMessage('hoe gaat ie', 1);
  store.addMessage('goed', 2);
  const $form = document.querySelector('form');
  $form.addEventListener('submit', e => handleFormSubmit(e, store));
};

init();
