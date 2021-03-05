import { atom } from 'recoil';

const textState = atom({
  key: 'TextState',
  default: '',
});

export default { textState };
