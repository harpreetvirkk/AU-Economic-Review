
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/home.vue')
      },
      {
        path: '/articles',
        component: () => import('pages/articles.vue')
      },
      {
        path: '/joinUs',
        component: () => import('pages/JoinUs.vue')
      },
      {
        path: '/submit',
        component: () => import('pages/SubmitHome.vue')
      },
      {
        path: '/about',
        component: () => import('pages/AboutHome.vue')
      },
      // ARTICLES
      {
        path: '/ar001',
        component: () => import('pages/articles/ar001.vue')
      },
      {
        path: '/ar002',
        component: () => import('pages/articles/ar002.vue')
      },
      {
        path: '/ar003',
        component: () => import('pages/articles/ar003.vue')
      },
      {
        path: '/ar006',
        component: () => import('pages/articles/ar006.vue')
      },
      {
        path: '/ar009',
        component: () => import('pages/articles/ar009.vue')
      },
      {
        path: '/ar010',
        component: () => import('pages/articles/ar010.vue')
      },
      {
        path: '/ar015',
        component: () => import('pages/articles/ar015.vue')
      },
      {
        path: '/ar018',
        component: () => import('pages/articles/ar018.vue')
      },
      {
        path: '/ar019',
        component: () => import('pages/articles/ar019.vue')
      },
      {
        path: '/ar020',
        component: () => import('pages/articles/ar020.vue')
      },
      {
        path: '/ar021',
        component: () => import('pages/articles/ar021.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
