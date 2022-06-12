<template>
  <div class="login">
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <!-- form -->
          <form
            action=""
            class="sign-in-form"
            method="post"
            @submit.prevent="login"
          >
            <h2 class="title">Sign In</h2>
            <p style="color: rgb(164, 165, 167)">
              Silahkan Login untuk melihat hasil Final Project
            </p>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="email" placeholder="Your Email" v-model="email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="password"
                v-model="password"
              />
            </div>

            <input type="submit" value="Login" class="btn solid" />

            <p class="social-text">Or Sign in With Social platforms</p>
            <div class="social-media">
              <a href="" class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </a>
            </div>
          </form>
          <!-- from akhir -->

          <!-- form sign up-->
          <form action="" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>

            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="text" placeholder="email" />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="password" />
            </div>
            <input type="submit" value="sign up" class="btn solid" />

            <p class="social-text">Or Sign up With Social platforms</p>
            <div class="social-media">
              <a href="" class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </a>
            </div>
          </form>
          <!-- from akhir -->
        </div>
      </div>
      <div class="panels-container">
        <!-- pamnl 1 -->
        <div class="panel left-panel">
          <div class="content">
            <h3>Buat Akun disini</h3>
            <p>Untuk Sementara pembuatan Akun hanya dapat melalui admin</p>
            <button class="btn transparent" id="sign-up-btn" @click="arrow()">
              Sign up
            </button>
          </div>
          <img src="../../assets/img/rocket.svg" class="image" alt="" />
        </div>
        <!-- panel akhir -->

        <!-- pamnl 1 -->
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              ipsam obcaecati ad vitae, deserunt ducimus ea at. Praesentium
              omnis voluptatum, deleniti, quibusdam esse atque mollitia sequi
              possimus quas exercitationem veniam.
            </p>
            <button class="btn transparent" id="sign-in-btn" @click="remove()">
              Sign in
            </button>
          </div>
          <img src="../../assets/img/desk.svg" class="image" alt="" />
        </div>
        <!-- panel akhir -->
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
    togglePassword() {
      var x = document.getElementById("password-content-3-5");
      if (x.type === "password") {
        x.type = "text";
        document.getElementById("icon-toggle").setAttribute("fill", "#2ec49c");
      } else {
        x.type = "password";
        document.getElementById("icon-toggle").setAttribute("fill", "#CACBCE");
      }
    },
    async login() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        // alert("Login success");
        this.$swal({
            title: "Welcome!",
            text: `You are successfully login`,
            icon: "success"});
        this.$router.push("/");
      }  catch (error) {
        this.$swal({
          title: "login failed",
          text: `Email atau Password Salah`,
          icon: "error",
        });
      }
    },
    arrow() {
     
      const containers = document.querySelector(".container");

      containers.classList.add("sign-up-mode");
    },
    remove() {
     

      const containers = document.querySelector(".container");

      containers.classList.remove("sign-up-mode");
    },
  },
};
</script>
<style>
@import "../../assets/css/login.css";
</style>