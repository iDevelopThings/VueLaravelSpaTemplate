<template>
    <div>
        <div class="card">
            <div class="body">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text"
                           v-model="email"
                           name="email"
                           id="email"
                           class="form-control">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"
                           v-model="password"
                           name="password"
                           id="password"
                           class="form-control">
                </div>

                <button class="btn btn-primary" @click="login" type="submit">
                    Login
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name    : "login",
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
                this.$store.user.login()
            }

        }
    }
</script>

<style scoped lang="scss">

</style>