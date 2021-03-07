import React from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from 'antd';
import TextInput from './components/TextInput';
import { atoms, selectors } from '../../store';

const AddShop = () => {
  const text = useRecoilValue(atoms.textState);
  const length = useRecoilValue(selectors.textLengthState);
  return (
    <>
      <h2>Home</h2>
      <TextInput />
      <h5>{text}</h5>
      <h6>{length}</h6>
      <Button type="primary">Button</Button>
    </>
  );
};

export default AddShop;
