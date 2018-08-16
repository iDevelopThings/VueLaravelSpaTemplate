require('./bootstrap');

import Vue from 'vue';

import VueStash from 'vue-stash';
import store from './stores';
import './directives';
import './filters';
import './components';
import router from './router';
import {get} from 'idb-keyval';

Vue.use(VueStash);

const app  = new Vue({
    router,
    data()
    {
        return {
            store
        }
    },
    async mounted()
    {
        window.axios.defaults.baseURL = this.$store.app.api;

        if (!await this.$store.user.isAuthed()) {
            let token = await get('token');

            if (token !== undefined) {
                await this.$store.user.authFromToken();

                this.$router.push({path : '/dashboard'});

            }
        }
        this.$store.app.ready = true;
    }
}).$mount('#app');
window.app = app;

