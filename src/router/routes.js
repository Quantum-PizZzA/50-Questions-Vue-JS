import Home from "@/views/Home";

import Register from "@/store/Register";
import SignIn from "@/store/SignIn";

import Showcases from "@/components/Showcases";
import MyShowcases from "@/components/MyCases";
import q1 from "@/questions/q1";
import q2 from "@/questions/q2";
import q3 from "@/questions/q3";
import q4 from "@/questions/q4";

export const ROUTES = [
  {
    path: "/1",
    name: "1",
    component: q1,
  },

  {
    path: "/2",
    name: "2",
    component: q2,
  },
  {
    path: "/3",
    name: "3",
    component: q3,
  },
  {
    path: "/4",
    name: "4",
    component: q4,
  },
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
    path: "/1",
    name: "1",
    component: q1,
  },

  {
    path: "/2",
    name: "2",
    component: q2,
  },
  {
    path: "/3",
    name: "3",
    component: q3,
  },
  {
    path: "/4",
    name: "4",
    component: q4,
  },
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
