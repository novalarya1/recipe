<template>
    <web-login></web-login>
</template>

<script>
    import WebLogin from '../auth/WebLogin.vue';
    
    export default {
        name: "LoginPage",
        components: {
            WebLogin
        }
    };
</script>