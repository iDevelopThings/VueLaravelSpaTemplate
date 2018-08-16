import {get, set} from 'idb-keyval';

export default {
    credentials : {
        email    : "a@b.co",
        password : "secret",
    },
    loggedIn    : false,
    user        : null,
    token       : null,

    async isAuthed()
    {
        let token = await get('token');

        if (this.token === null) return false;
        if (this.user === null) return false;
        if (token === undefined) return false;
        if (this.loggedIn === false) return false;

        return true;
    },

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

    async getUser()
    {
        let res = null;
        await axios.get('/user')
            .then(({data}) => {
                res = data;
            })
            .catch(error => {
                return null;
            })

        return res;
    },

    async login()
    {
        await axios.post('/login', this.credentials)
            .then(async (response) => {
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

    async logout()
    {
        this.loggedIn    = false;
        this.credentials = {
            email    : "",
            password : "",
        };
        this.user        = null;
        this.token       = null;

        await set('token', undefined);

        window.app.$router.push({path : '/login'});
    }
};