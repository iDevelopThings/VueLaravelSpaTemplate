<template>
    <div class="container">

        <div class="text-center">

            <ul class="list-inline mt-4">
                <li class="list-inline-item">
                    <router-link active-class="font-bold" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link active-class="font-bold" to="/settings">Settings</router-link>
                </li>
                <li class="list-inline-item">
                    <a href="javascript:;" @click="$store.user.logout()"><i class="fa fa-sign-out"></i> Logout</a>
                </li>
            </ul>
        </div>

        <hr>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name    : "auth",
        mounted()
        {
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