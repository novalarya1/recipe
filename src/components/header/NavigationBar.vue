<template>
    <div class="header__navbar row justify-content-between align-items-center" style="width: 450px">
        <SearchMenu />
        <component :is="components[menuComponent]" />
    </div>
</template>

<script>
import SearchMenu from "./SearchMenu.vue";
import SignupMenu from "./SignupMenu.vue";
import ProfileMenu from "./ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
    name: "NavigationBar",
    components: {
        SearchMenu,
        SignupMenu,
        ProfileMenu,
    },

    setup() {
        const menuComponent = ref("signup-menu");
        const store = useStore();

        const components = {
            'signup-menu': SignupMenu,
            'profile-menu': ProfileMenu,
        };

        const getToken = computed(() => {
            return store.state.auth.token;
        });

        if (!getToken.value) {
            menuComponent.value = "signup-menu";
        } else {
            menuComponent.value = "profile-menu";
        }

        watch(getToken, (newValue, oldValue) => {
            if (!newValue) {
                menuComponent.value = "signup-menu";
            } else {
                menuComponent.value = "profile-menu"
            }
        });
        return {
            menuComponent,
            components
        };
    }
};
</script>
