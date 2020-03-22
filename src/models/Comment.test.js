import User from "./User";
import Post from './Post';
import DataStore from '../stores/Datastore'
import Comment from './Comment';

test ('create new comment', () => {
  
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({ user: user,
    picture:'assets/webp/landscape_example.webp',
    categorie: "Nature Life",
    location: 'China,Beijing',
    description: 'Trees in the mist' ,
    tags:  ['trees', 'mist','sunrise'] ,
    key: "9969c1fc-0f51-3d3f-b687-d0835a081090",
    store: new DataStore() });
  const comment = new Comment({user: user, content: 'test', post: post});
  expect(comment.content).toBe('test');
});
test ('add like to comment', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({ user: user,
    picture:'assets/webp/landscape_example.webp',
    categorie: "Nature Life",
    location: 'China,Beijing',
    description: 'Trees in the mist' ,
    tags:  ['trees', 'mist','sunrise'] ,
    key: "9969c1fc-0f51-3d3f-b687-d0835a081090",
    store: new DataStore() });
  const comment = new Comment({user: user, content: 'test', post: post});
  comment.addLike();
  expect(comment.likes).toBe(1);
});
test ('remove like from comment', () => {
  const user = new User({
    id: "9969c1fc-0f51-3d3f-b687-d0835a081077",
    name: "You :)",
    description: "I hope you like my little app :)",
    pic: "assets/svg/account-icon.svg",
    store: new DataStore()
  });
  const post = new Post({ user: user,
    picture:'assets/webp/landscape_example.webp',
    categorie: "Nature Life",
    location: 'China,Beijing',
    description: 'Trees in the mist' ,
    tags:  ['trees', 'mist','sunrise'] ,
    key: "9969c1fc-0f51-3d3f-b687-d0835a081090",
    store: new DataStore() });
  const comment = new Comment({user: user, content: 'test', post: post});
  comment.addLike();
  comment.removeLike();
  expect(comment.likes).toBe(0);
});
