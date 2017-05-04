/**
 * Created by 俊 on 2017/5/3.
 */
// 模板页面
import IndexView from '../views/Welcome/index.vue';
import LoginView from '../views/login/login.vue';

const routes = [
  {path:"/",redirect: '/login'},
  {path: '/index',component: IndexView},
  {path: '/login',component: LoginView}
]

export default routes
