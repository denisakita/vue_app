import { createWebHistory, createRouter } from "vue-router";
import LoginForm from '../components/LoginForm.vue'
import Profile from '../components/Profile.vue'
import ReposList from '../components/ReposList.vue'

const routes = [
    {
      path: "/login",
      name: "Login",
      component: LoginForm,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/repos",
        name: "ReposList",
        component: ReposList,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;