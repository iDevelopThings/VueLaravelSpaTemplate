<template>

    <div class="h-full">
        <navigation-menu :authed="false"
                         :items="[{title : 'Login', path :'/login'}, {title : 'register', path :'/register'}, ]"></navigation-menu>

        <div class="flex justify-center mt-16">


            <div class="card shadow-lg">
                <div class="body ">
                    <div class="form-group">
                        <label for="email">Name</label>
                        <input type="text"
                               v-model="name"
                               name="name"
                               required
                               id="name">
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="text"
                               v-model="email"
                               name="email"
                               required
                               id="email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password"
                               v-model="password"
                               name="password"
                               required
                               id="password">
                    </div>

                    <div class="form-group">
                        <label for="password">Password Confirm:</label>
                        <input type="password"
                               v-model="password_confirm"
                               name="password_confirm"
                               required
                               id="password_confirm">
                    </div>

                    <div class="clearfix">
                        <button class="btn btn-primary float-right" @click="login" type="submit">
                            Register
                        </button>
                    </div>


                    <router-link to="/login"
                                 class="bg-grey-lighter p-3 text-center rounded-lg block mt-4 text-grey-darker hover:text-grey-darkest no-underline">
                        Already have an account?
                    </router-link>

                </div>
            </div>


        </div>

    </div>

</template>

<script>
	export default {
		name    : 'login',
		mounted()
		{
		},
		store   : {
			email    : 'user.credentials.email',
			password : 'user.credentials.password',
			user     : 'user.user',
			loggedIn : 'user.loggedIn',
		},
		methods : {

			login()
			{
				this.$store.user.login();
			},

		},
	};
</script>

<style scoped lang="scss">

</style>