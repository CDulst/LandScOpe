import Comment from './Comment.js';

test ('create new comment', () => {
  const comment = new Comment({user: 'bob', content: "test"});
  expect(comment.content).toBe('test');
});
test ('add like to comment', () => {
  const comment = new Comment({user: 'bob', content: "test"});
  comment.addLike();
  expect(comment.likes).toBe(1);
});
test ('remove like from comment', () => {
  const comment = new Comment({user: 'bob', content: "test"});
  comment.addLike();
  comment.removeLike();
  expect(comment.likes).toBe(0);
});
