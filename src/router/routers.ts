const Layout = () => import('@/layout/index.vue');

const routes = [
  {
    redirect: '/home/main',
    path: '/',
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'main',
        meta: {
          title: '表单生成',
          icon: 'workbench',
        },
        name: 'HomeMain',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
];
export default routes;
