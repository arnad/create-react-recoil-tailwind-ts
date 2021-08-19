import { selector } from 'recoil';

const currentUser = selector({
  key: 'currentUser',
  get: () => 'user',
});

export { currentUser };
