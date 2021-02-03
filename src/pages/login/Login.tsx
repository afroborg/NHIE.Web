import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { postAsync } from '@/helpers/api-service';
import React, { useState } from 'react';
import styles from './login.module.scss';

interface ILoginProps {
  setAuth: (b: boolean) => void;
}

const Login: React.FC<ILoginProps> = ({ setAuth }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await postAsync('auth', { password });
      setAuth(true);
    } catch (e) {
      setAuth(false);
      setError(e.data);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>Ange lösenord för att fortsätta</h1>
        <form className={styles.form} onSubmit={submit}>
          <Input
            value={password}
            onChange={setPassword}
            placeholder="Lösenord"
          />
          <p className={styles.how}>Hur får jag ett lösenord?</p>
          <div className={styles.button}>
            <Button>{isLoading ? 'Loggar in...' : 'Logga in'}</Button>
          </div>
          {error && <p className={styles.errorMsg}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
