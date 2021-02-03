import { routes } from '@/routes';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminQuestions from './AdminQuestions';

const Admin = () => {
  return (
    <div>
      <Switch>
        <Route
          path={routes.ADMIN.path + routes.ADMIN.children.QUESTIONS.path}
          component={AdminQuestions}
        />

        <Redirect
          to={routes.ADMIN.path + routes.ADMIN.children.QUESTIONS.path}
        />
      </Switch>
    </div>
  );
};

export default Admin;
