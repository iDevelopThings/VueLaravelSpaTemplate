<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" v-model="user.email" id="email" class="form-control">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name    : "settings",
        mounted()
        {
        },
        store   : {
            user     : 'user.user',
            loggedIn : 'user.loggedIn',
        },
        data()
        {
            return {};
        },
        methods : {}
    }
</script>

<style scoped lang="scss">

</style>