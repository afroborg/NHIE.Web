import Admin from './pages/admin/Admin';
import AdminQuestions from './pages/admin/AdminQuestions';
import Login from './pages/login/Login';
import Play from './pages/play/Play';

export const routes = {
  LOGIN: {
    path: '/login',
    component: Login,
  },
  PLAY: {
    path: '/play',
    component: Play,
  },
  ADMIN: {
    path: '/admin',
    component: Admin,
    children: {
      QUESTIONS: {
        path: '/questions',
        component: AdminQuestions,
      },
    },
  },
};
