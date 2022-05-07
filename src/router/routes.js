import PageTwo from '../pages/PageTwo.vue';
import PageThree from '../pages/PageThree.vue';
import Form from '../pages/FormPage.vue';
import Login from '../pages/LoginPage.vue';
import PageTabs from '../pages/PageTabs.vue';
import Form2 from '../pages/FormPage2.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '/pagina2', name: 'pageTwo', component: PageTwo },
      { path: '/pagina3', name: 'pageThree', component: PageThree },
      { path: '/form', name: 'form', component: Form },
      { path: '/login', name: 'login', component: Login },
      { path: '/tabs', name: 'tabs', component: PageTabs },
      { path: '/form2', name: 'form2', component: Form2 },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
