<template>

    <div class="h-full">
        <navigation-menu :authed="false"
                         :items="[{title : 'Login', path :'/login'}, {title : 'register', path :'/register'}, ]"></navigation-menu>

        <div class="flex justify-center mt-16">


            <div class="card shadow-lg">
                <form action="" method="post" @submit="register">
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
                                   v-model="password_confirmation"
                                   name="password_confirmation"
                                   required
                                   id="password_confirmation">
                        </div>

                        <div class="clearfix">
                            <button class="btn btn-primary float-right" type="submit">
                                Register
                            </button>
                        </div>


                        <router-link to="/login"
                                     class="bg-grey-lighter p-3 text-center rounded-lg block mt-4 text-grey-darker hover:text-grey-darkest no-underline">
                            Already have an account?
                        </router-link>

                    </div>
                </form>
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
			name                  : 'user.credentials.name',
			email                 : 'user.credentials.email',
			password              : 'user.credentials.password',
			password_confirmation : 'user.credentials.password_confirmation',
			user                  : 'user.user',
			loggedIn              : 'user.loggedIn',
		},
		methods : {

			register($event)
			{
				$event.preventDefault();

				if (this.name.trim() === '') {
					this.$store.app.addValidationNotification('Name must be set.', 'name');
					return;
				}
				if (this.email.trim() === '') {
					this.$store.app.addValidationNotification('Email must be set.', 'email');
					return;
				}
				if (this.password.trim() === '') {
					this.$store.app.addValidationNotification('Password must be set.', 'password');
					return;
				}
				if (this.password_confirmation.trim() === '') {
					this.$store.app.addValidationNotification('Password must be set.', 'password_confirmation');
					return;
				}
				if (this.password !== this.password_confirmation) {
					this.$store.app.addValidationNotification('Passwords provided to not match.');
					return;
				}

				this.$store.user.register();
			},

		},
	};
</script>

<style scoped lang="scss">

</style>