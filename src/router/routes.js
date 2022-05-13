import PageTwo from '../pages/PageTwo.vue';
import PageThree from '../pages/PageThree.vue';
import Form from '../pages/FormPage.vue';
import FormMes from '../pages/FormPage2.vue';
import Login from '../pages/LoginPage.vue';
import PageTabs from '../pages/PageTabs.vue';
import StyleVHtml from '../pages/StyleVHtml.vue';
import PagePDF from '../pages/PagePDF.vue';
import PagePDF2 from '../pages/PagePDF2.vue';
import CopyClipboard from '../pages/CopyClipboard.vue';
import ParamsVue from '../pages/ParamsVue.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '/pagina2', name: 'pageTwo', component: PageTwo },
      { path: '/pagina3', name: 'pageThree', component: PageThree },
      { path: '/form', name: 'form', component: Form },
      { path: '/form-mes', name: 'formMes', component: FormMes },
      { path: '/login', name: 'login', component: Login },
      { path: '/tabs', name: 'tabs', component: PageTabs },
      { path: '/style-v-html', name: 'StyleVHtml', component: StyleVHtml },
      { path: '/pdf', name: 'pdf', component: PagePDF },
      { path: '/pdf2', name: 'pdf2', component: PagePDF2 },
      { path: '/copy-clipboard', name: 'clip-board', component: CopyClipboard },
      { path: '/params-page/:id', name: 'params-page', component: ParamsVue },

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
