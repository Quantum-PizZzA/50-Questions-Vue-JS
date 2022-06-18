import Home from "@/views/Home";

import Register from "@/store/Register";
import SignIn from "@/store/SignIn";

import Showcases from "@/components/Showcases";
import MyShowcases from "@/components/MyCases";

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Register",
    name: "Регистрация",
    component: Register,
  },
  {
    path: "/SignIn",
    name: "Авторизация",
    component: SignIn,
  },
  {
    path: "/AllСases",
    name: "Showcases",
    component: Showcases,
  },

  {
    path: "/MyСases",
    name: "Мои товары",
    component: MyShowcases,
  },
];

export const NOT_AUTH_ROUTES = [
  {
    path: "/Register",
    name: "Регистрация",
    component: Register,
  },
  {
    path: "/SignIn",
    name: "Войти",
    component: SignIn,
  },
  {
    path: "/AllСases",
    name: "Все товары",
    component: Showcases,
  },
];

export const AUTH_ROUTES = [
  {
    path: "/AllСases",
    name: "Все товары",
    component: Showcases,
  },
  {
    path: "/MyСases",
    name: "Мои товары",
    component: MyShowcases,
  },
];
