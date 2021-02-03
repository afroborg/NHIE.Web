import { ReactComponent as Plus } from '@/assets/plus.svg';
import { ReactComponent as Save } from '@/assets/save.svg';
import React, { useState } from 'react';
import styles from './add-button.module.scss';

interface IAddButtonProps {
  onSave?: () => void;
}

const AddButton: React.FC<IAddButtonProps> = ({ children, onSave }) => {
  const [isToggled, setIsToggled] = useState(false);

  const save = () => {
    onSave?.();
    setIsToggled(false);
  };
  return (
    <div
      className={`${styles.button} ${
        isToggled ? styles['button--toggled'] : ''
      }`}
    >
      <button
        className={styles.plus}
        onClick={() => (isToggled ? save() : setIsToggled(true))}
      >
        {isToggled ? <Save /> : <Plus />}
      </button>
      {isToggled && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default AddButton;
