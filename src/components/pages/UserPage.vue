<template>
    <div class="container-md my-5 py-5">
        <div class="row">
            <user-menu @changeComponent="$router.push($event)" />
            <div class="col-lg-9">
                <component :is="component[getRoute]" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import UserMenu from "../user/UserMenu.vue"
    import FavoriteRecipe from "../user/FavoriteRecipe.vue"
    import PersonalInfo from "../user/PersonalInfo.vue"
    import UserRecipe from "../user/UserRecipe.vue"
    import { useRoute } from "vue-router"
    import { computed } from "vue"
    import { useStore } from "vuex"

    const route = useRoute();

    const component = {
        "personal-info": PersonalInfo,
        "favorite-recipes": FavoriteRecipe,
        "user-recipe": UserRecipe
    }

    const getRoute = computed(() => {
        return route.params.component
    })

    const userData = computed(() => {
        return store.state.auth.userLogin
    })

</script>