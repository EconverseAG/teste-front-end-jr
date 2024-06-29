import { useState } from 'react';
import styles from './Counter.module.scss';
import PlusIcon from '/icons/plus.svg';
import MinusIcon from '/icons/minus.svg';

export function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className={styles.quantityControl}>
      <button className={styles.quantityButton} onClick={handleDecrement}>
        <img src={MinusIcon} alt="Decrement" />
      </button>
      <span className={styles.quantityDisplay}>{count}</span>
      <button className={styles.quantityButton} onClick={handleIncrement}>
        <img src={PlusIcon} alt="Increment" />
      </button>
    </div>
  );
}
