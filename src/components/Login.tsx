import React, { useState } from 'react';
import { postAsync } from '../helpers/api-service';
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
      <h1>Är du cool nog att få spela?</h1>
      <form className={styles.form} onSubmit={submit}>
        <input
          className={styles.input}
          placeholder="Lösenord"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoading ? 'Laddar...' : 'Logga in'}</button>
        {error && <p className={styles.errorMsg}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
