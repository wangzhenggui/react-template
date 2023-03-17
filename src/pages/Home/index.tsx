import { Button } from 'antd';
import FlexBox from 'components/FlexBox';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, selectCount } from './counterSlice';
import TextInput from './components/TextInput';

const AddShop = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <>
      <h2>{count}</h2>
      <TextInput />
      <Button type="primary" onClick={() => dispatch(increment())}>
        increment
      </Button>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        decrement
      </Button>
      <FlexBox />
    </>
  );
};

export default AddShop;
