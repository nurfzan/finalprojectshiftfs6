<template>
    <div>
        <h1>Ini halaman user</h1>
        <nuxt-link to="/home">Back to Home</nuxt-link>
    </div>
</template>
<script>
export default {
    asyncData() {
        return {
            message: "Hello Vue.js!",
        }
    },
};
</script>