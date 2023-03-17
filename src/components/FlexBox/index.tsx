import styles from './index.less';

const FlexBox = () => {
  return (
    <div className={`flex ${styles.box}`}>
      <div className={`flex-grow flex-shrink bg-yellow-200 ${styles.box1}`} />
      <div className={`flex-grow-0 flex-shrink-0 bg-yellow-700 ${styles.box2}`} />
    </div>
  );
};
export default FlexBox;
