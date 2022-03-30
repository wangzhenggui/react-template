import React from 'react';
import { Input } from 'antd';
import styles from './index.less';

const TextInput = () => {
  return (
    <div className={styles.wrapper}>
      <Input placeholder="Basic usage" />
    </div>
  );
};

export default TextInput;
