<template>
    <div class="container">

        <div class="text-center">

            <ul class="list-inline mt-4">
                <li class="list-inline-item">
                    <router-link active-class="font-bold" to="/home">Home</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link active-class="font-bold" to="/about">About</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link active-class="font-bold" to="/login">Login</router-link>
                </li>
                <li class="list-inline-item">
                    <router-link active-class="font-bold" to="/dashboard">Dashboard</router-link>
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