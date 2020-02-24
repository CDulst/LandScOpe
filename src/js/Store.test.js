import store from './Store.js';
import User from './User'


test ('post added to store', () => {
  store.addPost({user: new User({name: "bob", description: "eagle", pic: "assets/svg/account-icon.svg"}), picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  expect(store.posts.length).toBe(1);
});
