import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { routes } from '../routes';
import styles from './app.module.scss';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <Switch>
          {Object.values(routes).map((r) => (
            <Route key={r.path} path={r.path} component={r.component} />
          ))}
          <Redirect to={routes.LOGIN.path} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
