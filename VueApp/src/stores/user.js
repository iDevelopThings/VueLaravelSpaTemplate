import {del, get, set} from 'idb-keyval';

export default {
	credentials : {
		name                  : 'Acme',
		email                 : 'a@b.co',
		password              : 'secret',
		password_confirmation : 'secret',
	},
	loggedIn    : false,
	user        : null,
	token       : null,

	/**
	 * Check if all of the authorisation based parameters are set
	 *
	 * @returns {Promise<boolean>}
	 */
	async isAuthed()
	{
		let token = await get('token');

		if (this.token === null) return false;
		if (this.user === null) return false;
		if (token === undefined) return false;
		if (this.loggedIn === false) return false;

		return true;
	},

	/**
	 * For users refreshing/returning to the site.
	 * Will obtain token from store and set it.
	 *
	 * @returns {Promise<null>}
	 */
	async authFromToken()
	{
		let token = await get('token');

		if (token === undefined)
			return null;

		this.token = token;

		axios.defaults.headers.common['Authorization'] = `Bearer ${this.token.accessToken}`;

		if (this.user === null) {
			this.user = await this.getUser();
		}

		this.loggedIn = true;
	},

	/**
	 * Gets the currently authorised user
	 *
	 * @returns {Promise<*>}
	 */
	async getUser()
	{
		let res = null;
		await axios.get('/user')
			.then(({data}) => {
				res = data;
			})
			.catch(error => {
				return null;
			});

		return res;
	},

	/**
	 * Attempt to login the platform with the users credentials
	 *
	 * @returns {Promise<void>}
	 */
	async login()
	{
		await axios.post('/login', this.credentials)
			.then(async (response) => {
				window.app.store.app.addNotification('Successfully logged in!', 'success');
				await set('token', response.data.token);
				await this.authFromToken();

				window.app.$router.push({path : '/dashboard'});
			})
			.catch(error => {
				if (error.response !== undefined && error.response.data !== undefined) {
					return error.response.data;
				}

				console.log(error);
			});

	},

	async register()
	{
		await axios.post(`/register`, this.credentials)
			.then(async (response) => {
				window.app.store.app.addNotification('Successfully registered!', 'success');
				await set('token', response.data.token);
				await this.authFromToken();

				window.app.$router.push({path : '/dashboard'});
			})
			.catch(error => console.log);
	},

	/**
	 * Log the user out
	 *
	 * @returns {Promise<void>}
	 */
	async logout()
	{
		this.loggedIn    = false;
		this.credentials = {
			email    : 'a@b.co',
			password : 'secret',
		};
		this.user        = null;
		this.token       = null;

		await del('token');

		window.app.$router.push({path : '/login'});
	},
};