import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { postAsync } from '@/helpers/api-service';
import { routes } from '@/routes';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './login.module.scss';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await postAsync('auth', { password });
      history.push(routes.PLAY.path);
    } catch (e) {
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
            type="password"
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
