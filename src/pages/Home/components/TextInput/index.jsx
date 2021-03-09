import React from 'react';
import { useRecoilState } from 'recoil';
import { Input } from 'antd';
import { atoms } from '../../../../store';
import styles from './index.less';

const TextInput = () => {
  const [text, setText] = useRecoilState(atoms.textState);
  const handleChange = (e) => setText(e.target.value);
  return (
    <div className={styles.wrapper}>
      <Input placeholder="Basic usage" value={text} onChange={handleChange} />
    </div>
  );
};

export default TextInput;
