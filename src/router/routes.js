import loadable from './loadable';

const Home = loadable(() => import('../pages/Home'));
const About = loadable(() => import('../pages/About'));

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About
    },
    // {
    //     path: '/need_permission',
    //     component: ForgetPassword,
    //     permission: ['admin2'],
    //     backto: '404'
    // },
    // {
    //     path: '/*',
    //     component: NotFound404,
    // }
];

export default routes;
