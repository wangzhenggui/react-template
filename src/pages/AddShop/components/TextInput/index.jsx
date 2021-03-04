import React from 'react';
import { useRecoilState } from 'recoil';
import Atom from '../../../../store/addShopAtom';

const TextInput = () => {
  const [text, setText] = useRecoilState(Atom.textState);
  return <input type="text" value={text} onChange={(e) => setText(e.target.value)} />;
};

export default TextInput;
