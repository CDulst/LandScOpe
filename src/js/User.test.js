import User from './User';

test ('create new user', () => {
  const user = new User({name: 'bob', description: 'flying eagle', pic: 'assets/svg/account-icon.svg'});
  expect(user.name).toBe('bob');
});
