import React from 'react';
import { useRecoilState } from 'recoil';
import TextInput from './components/TextInput';
import Atom from '../../store/addShopAtom';

const AddShop = () => {
  const [text] = useRecoilState(Atom.textState);
  return (
    <>
      <h2>Page AddShop</h2>
      <TextInput />
      <h6>{text}</h6>
    </>
  );
};

export default AddShop;
