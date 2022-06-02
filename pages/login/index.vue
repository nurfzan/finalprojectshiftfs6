<template>
  <div>
    <div class="d-flex justify-content-center vh-100">
      <div class="d-flex align-items-center">
        <div class="card" style="width: 30vw">
          <div class="card-body text-center">
            <h1>LOGIN</h1>
            <form @submit.prevent="login">
              <input class="form-control" type="text" v-model="email" placeholder="username" />
              <input class="form-control" type="password" v-model="password" placeholder="password" />
              <button type="submit" class="btn btn-primary mt-3 w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "clear",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$swal({
            title: "Welcome!",
            text: `You are successfully login`,
            icon: "success",});
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>