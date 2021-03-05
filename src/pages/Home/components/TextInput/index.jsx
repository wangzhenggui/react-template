import React from 'react';
import { useRecoilState } from 'recoil';
import { atoms } from '../../../../store';

const TextInput = () => {
  const [text, setText] = useRecoilState(atoms.textState);
  return <input type="text" value={text} onChange={(e) => setText(e.target.value)} />;
};

export default TextInput;
