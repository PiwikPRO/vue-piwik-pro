export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example',
    },
  },
  {
    path: '/e-commerce',
    name: 'eCommerce',
    component: () => import('../pages/ECommercePage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - eCommerce',
    },
  },
]
