import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import DetailPage from "./components/pages/DetailPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import NewRecipePage from "./components/pages/NewRecipePage.vue";
import EditRecipePage from "./components/pages/EditRecipePage.vue"; // gunakan NewRecipePage sebagai Edit
import Cookies from "js-cookie";
import { store } from "./store/index"; // pastikan ini benar

// Fungsi cek autentikasi
const checkAuth = () => {
  const jwtCookie = Cookies.get("jwt");
  const expirationDate = Cookies.get("tokenExpirationDate");
  const userId = Cookies.get("UID");

  if (jwtCookie && new Date().getTime() < +expirationDate) {
    store.commit("auth/setToken", {
      idToken: jwtCookie,
      expiresIn: expirationDate,
    });
    store.dispatch("auth/getUser", userId);
    return true;
  } else {
    store.commit("auth/setUserLogout");
    return false;
  }
};

export const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next({ name: "loginPage" });
    },
  },
  { path: "/signup", name: "signupPage", component: SignupPage },
  { path: "/login", name: "loginPage", component: LoginPage },
  { path: "/recipe/:id", name: "detailPage", component: DetailPage, props: true },
  {
    path: "/user/:component",
    name: "userPage",
    component: UserPage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next({ name: "loginPage" });
    },
    props: true,
  },
  {
    path: "/new-recipe",
    name: "newRecipePage",
    component: NewRecipePage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next({ name: "loginPage" });
    },
  },
  {
    path: "/edit/:id",
    name: "EditRecipe",
    component: EditRecipePage,
    props: true,
    beforeEnter: (to, from, next) => {
        checkAuth() ? next() : next({ name: "loginPage" });
    },
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
