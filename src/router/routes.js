const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "", component: () => import("pages/home.vue") },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("pages/dashboard.vue"),
        meta: { keepAlive: true, requiresAuth: true },
      },
      {
        path: "/home",
        name: "home",
        component: () => import("pages/home.vue"),
      },
      {
        path: "/uploadstats",
        name: "uploadstats",
        component: () => import("pages/admin/postStats.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("pages/dashboard.vue"),
        meta: { keepAlive: true, requiresAuth: true },
      },
    ],
    meta: {
      requiresAuth: true,
    },
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
      {
        path: "/email-confirmation",
        name: "email-confirmation",
        component: () => import("pages/user/EmailConfirmation.vue"),
      },
      {
        path: "/onboarding",
        name: "onboarding",
        component: () => import("pages/user/onboarding.vue"),
      },
      {
        path: "/me",
        name: "profile",
        component: () => import("pages/user/profile.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
