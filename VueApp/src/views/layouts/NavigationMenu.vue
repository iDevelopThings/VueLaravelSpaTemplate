<template>

    <div>
        <nav class="navigation-menu">

            <div class="branding">
                <span class="brand-text">Vue Laravel SPA</span>
            </div>

            <div class="hamburger">
                <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                        Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div class="menu-items-container">
                <div class="items">
                    <router-link :to="item.path"
                                 active-class="active"
                                 :key="index"
                                 class=""
                                 v-for="(item, index) in items">
                        {{item.title}}
                    </router-link>
                </div>
                <div v-if="authed">
                    <button
                            @click="$store.user.logout()"
                            class="btn btn-blue">
                        <i class="fa fa-sign-out"></i> Log out
                    </button>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
	export default {
		props : {
			authed : {
				type    : Boolean,
				default : true,
			},
			items  : {
				type    : Array,
				default : function () {
					return [
						{
							title : 'Dashboard',
							path  : '/dashboard',
						},
						{
							title : 'Test',
							path  : '/home',
						},
					];
				},
			},
		},
		name  : 'NavigationMenu',
		data()
		{
			return {};
		},
	};
</script>

<style scoped>

</style>