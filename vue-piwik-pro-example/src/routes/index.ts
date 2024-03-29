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
    path: '/page-views',
    name: 'PageViews',
    component: () => import('../pages/PageViewsPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Page Views',
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
  {
    path: '/user-management',
    name: 'User management',
    component: () => import('../pages/UserManagementPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - User management',
    },
  },
  {
    path: '/custom-events',
    name: 'Custom events',
    component: () => import('../pages/CustomEventPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Custom events',
    },
  },
  {
    path: '/content-tracking',
    name: 'Content tracking',
    component: () => import('../pages/ContentTrackingPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Content tracking',
    },
  },
  {
    path: '/goal-conversions',
    name: 'Goal conversions',
    component: () => import('../pages/GoalConversionPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Goal conversions',
    },
  },
  {
    path: '/download-and-outlink',
    name: 'Download and outlink',
    component: () => import('../pages/DownloadAndOutlinkPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Download and outlink',
    },
  },
  {
    path: '/site-search',
    name: 'Site search',
    component: () => import('../pages/SiteSearchPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Site search',
    },
  },
  {
    path: '/custom-dimensions',
    name: 'Custom dimensions',
    component: () => import('../pages/CustomDimensionsPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Custom dimensions',
    },
  },
  {
    path: '/cookie-management',
    name: 'Cookie management',
    component: () => import('../pages/CookieManagementPage.vue'),
    meta: {
      title: 'Vue Piwik PRO Example - Cookie management',
    },
  },
]
