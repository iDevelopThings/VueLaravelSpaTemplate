import authLayout from '../views/layouts/auth';
import appLayout from '../views/layouts/app';

import home from '../views/home';
import about from '../views/about';
import login from '../views/auth/login';

import dashboard from '../views/dashboard';
import settings from '../views/user/settings';

export default [
    {
        path      : '/',
        component : authLayout,
        children  : [
            {
                path      : '/home',
                component : home
            },
            {
                path      : '/about',
                component : about
            },
            {
                path      : 'login',
                component : login
            }
        ]
    },
    {
        path      : '/',
        component : appLayout,
        children  : [
            {
                path      : '/dashboard',
                component : dashboard,
                meta      : {requiresAuth : true}
            },
            {
                path      : '/settings',
                component : settings,
                meta      : {requiresAuth : true}
            },
        ]
    },

    {
        path     : '*',
        redirect : '/home'
    }
]