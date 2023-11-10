
const routes = [
  {
    path: '/',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/dashboard.vue') },
      { path: '', component: () => import('pages/home.vue') }
    ]
  },

  {
    path: '/apps',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/dashboard.vue') },
      { path: '/home', component: () => import('pages/home.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
