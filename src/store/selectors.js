import { selector } from 'recoil';
import Atoms from './atoms';

const textLengthState = selector({
  key: 'TextLengthState',
  get: ({ get }) => {
    const { length } = get(Atoms.textState);
    return length;
  },
});

export default { textLengthState };
