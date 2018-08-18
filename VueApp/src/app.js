require('./bootstrap');

//import errors from './errors';
import {get} from 'idb-keyval';
import Vue from 'vue';

import VueStash from 'vue-stash';
import './components';
import './directives';
import './filters';
import router from './router';
import store from './stores';

//require('./services/errors/errors');
Vue.use(VueStash);
//Vue.use(errors);

const app = new Vue({
	router,
	data()
	{
		return {
			store,
		};
	},

	methods : {

		/*testNotif()
		{
			setTimeout(() => {
				this.store.app.addNotification('hello', 'success');

				this.testNotif();
			}, _.random(0, 1000));
		},*/

	},

	async mounted()
	{
		window.axios.defaults.baseURL = this.$store.app.api;

		//Handle auth if user has token but not authed
		if (!await this.$store.user.isAuthed()) {
			let token = await get('token');

			if (token !== undefined) {
				await this.$store.user.authFromToken();

				this.$router.push({path : '/dashboard'});

			}
		}

		//Automatically handle validation errors
		window.axios.interceptors.response.use(undefined, (error) => {
			let res = error.response;

			if (res && res.status === 422) {
				if (res.data !== undefined) {
					if (res.data.errors !== undefined) {
						let errors = res.data.errors;
						if (Object.keys(errors).length) {
							for (let i in errors) {
								///this.store.app.errors[i] = errors[i][0];
								//this.$addError(i, errors[i][0]);
								this.store.app.addValidationNotification(
									errors[i][0],
									i,
								);
							}
						}
					}
				}
			}
			return Promise.reject(error);
		});

		this.$store.app.ready = true;
	},
}).$mount('#app');

window.app = app;

