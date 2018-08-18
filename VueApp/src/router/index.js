import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes : routes,
    mode   : 'history'
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (window.app === undefined) {
            next({
                path  : '/login',
                query : {redirect : to.fullPath}
            });
            return;
        }
        if (window.app.store === undefined) {
            next({
                path  : '/login',
                query : {redirect : to.fullPath}
            });
            return;
        }

        if (!await window.app.store.user.isAuthed()) {
            next({
                path  : '/login',
                query : {redirect : to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router;