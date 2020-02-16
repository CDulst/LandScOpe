import store from './Store.js';


test ('post added to store', () => {
  store.addPost({user: 'bob', picture: "test", categorie: "test", location: "test", description: "test", tags : ["test","test2"]})
  expect(store.posts.length).toBe(1);
});
