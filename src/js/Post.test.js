import {Post, MOODS} from './Post.js';

test ('create new Post', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  expect(post.user).toBe('bob'),
  expect(post.picture).toBe('test'),
  expect(post.categorie).toBe('test'),
  expect(post.location).toBe('test'),
  expect(post.description).toBe('test');
});

test ('tags array work with new Post', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  expect(post.tags[0]).toBe('test'),
  expect(post.tags[1]).toBe('test2');
});
test ('add like to post', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  post.addLike();
  expect(post.likes).toBe(1);
});
test ('remove like from post', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  post.addLike();
  post.removeLike();
  expect(post.likes).toBe(0);
});
test ('comment added to post', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  post.addComment({user: 'bob', comment: 'test'});
  expect(post.comments.length).toBe(1);
});
test ('point assigned to mood', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  post.updateMood('Relaxed');
  expect(post.mood['Relaxed']).toBe(1);
});
test ('point removed from mood', () => {
  const post = new Post({user: 'bob', picture: 'test', categorie: 'test', location: 'test', description: 'test', tags: ['test', 'test2']});
  post.updateMood('Dreamy');
  post.decreaseMood('Dreamy');
  expect(post.mood['Dreamy']).toBe(0);
});



