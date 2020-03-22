import Post from './Post.js';
import User from "./User";
import DataStore from '../stores/Datastore'

test ('create new Post', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  expect(post.user).toBe(user),
  expect(post.picture).toBe('test'),
  expect(post.categorie).toBe('test'), 
  expect(post.location).toBe('test'),
  expect(post.description).toBe('test');
});

test ('tags array work with new Post', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  expect(post.tags[0]).toBe('test'),
  expect(post.tags[1]).toBe('test2');
});
test ('add like to post', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  post.addLike();
  expect(post.likes).toBe(1);
});
test ('remove like from post', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  post.addLike();
  post.removeLike();
  expect(post.likes).toBe(0);
});

test ('point assigned to mood', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  post.updateMood('Relaxed');
  expect(post.mood['Relaxed']).toBe(1);
});
test ('point removed from mood', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  post.updateMood('Dreamy');
  post.decreaseMood('Dreamy');
  expect(post.mood['Dreamy']).toBe(0);
});
test ('linkcomment', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({user: user, picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2'],store: new DataStore()});
  const comment = new Comment({user: user, content: 'test', post: post});
  post.linkComment(comment);
  expect(post.commentsLength).toBe(1);

});



