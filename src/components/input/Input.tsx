import React from 'react';
import styles from './input.module.scss';

interface IInputProps {
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
}) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
