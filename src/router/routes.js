import LayoutLogin from 'src/layouts/LayoutLogin.vue'
import Login from 'src/pages/Login.vue'
import Dashboard from 'src/pages/Dashboard.vue'
import UserManagement from 'src/pages/UserManagement.vue'
const routes = [
  {
    path: '/',
    component: LayoutLogin,
    children: [
      {
        path: '',
        component: Login, // Página de Login
      },
    ],
  },
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'), // Altere para o layout apropriado
    children: [
      {
        path: 'dashboard',
        component: Dashboard, // Página do Dashboard
      },
      {
        path: 'users',
        component: UserManagement,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'), // Página de erro 404
  },
]

export default routes
