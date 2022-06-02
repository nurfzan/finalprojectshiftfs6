<template>
  <div class="d-flex justify-content-center vh-100">
    <div class="d-flex align-items-center">
      <div v-if="error.statusCode === 404" class="text-center">
        <h2>PAGE NOT FOUND</h2>
        <NuxtLink to="/">Back to Home</NuxtLink>
      </div>
      <div v-else>
        <h2>ERROR</h2>
        <p>{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "clear",
  props: ["error"],
};
</script>