const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/home.vue") },
      {
        path: "/dashboard",
        component: () => import("pages/dashboard.vue"),
        meta: { keepAlive: true },
      },
      { path: "/home", component: () => import("pages/home.vue") },
    ],
  },

  {
    path: "/user",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("pages/user/login.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("pages/user/signup.vue"),
      },
      {
        path: "/resetpassword",
        name: "resetpassword",
        component: () => import("pages/user/resetpassword.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
