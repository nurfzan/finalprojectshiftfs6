<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="submitData">
        <BootstrapText
          name="Class Name"
          :val="form.name"
          @get="(newValue) => this.changeState({ name: newValue })"
        />
        <BootstrapText
          name="Description"
          :val="form.description"
          @get="(newValue) => this.changeState({ description: newValue })"
        />
        <BootstrapText
          name="Start"
          type="date"
          :val="form.start"
          @get="(newValue) => this.changeState({ start: newValue })"
        />
        <BootstrapText
          name="End"
          type="date"
          :val="form.end"
          @get="(newValue) => this.changeState({ end: newValue })"
        />
        <div class="text-right">
          <button
            type="button"
            class="btn btn-secondary mr-3"
            @click="$router.go(-1)"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Request from "~/mixins/request.vue";
export default {
  mixins: [Request],
  // data() {
  //   const detailClass = this.$store.state.class.class;
  //   return {
  //     form: detailClass,
  //   };
  // },
  computed: {
    form() {
      return this.$store.state.session.session;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.getDetail();
    }
  },
  methods: {
    changeState(value) {
      const sesi = { ...this.form, ...value };
      this.$store.dispatch("session/SET_SESSION", sesi);
    },
    // async getDetail() {
    //   try {
    //     const response = await this.$axios.get(`/class/${this.$route.params.id}`);
    //     this.form = response.data.data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async getDetail() {
      const response = await this.requestGet(`/class/${this.$route.params.id}`);
      this.changeState(response.data);
    },

    // async tambahKelas() {
    //   const payload = this.form;
    //   try {
    //     const response = await this.$axios.post("/class", payload);
    //     alert("Data berhasil ditambahkan");
    //     this.$router.push("/class");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async tambahSesi() {
      const payload = this.form;
      const response = await this.requestFormData("/session", payload);
      if (response) this.$router.push("/session");
    },

    async updateSesi() {
      const payload = this.form;
      try {
        const response = await this.$axios.put(`/session`, payload);
        alert("Data berhasil diupdate");
        this.$router.push("/session");
      } catch (error) {
        console.log(error);
      }
    },
    async submitData() {
      if (this.$route.params.id) {
        await this.updateSesi();
      } else {
        await this.tambahSesi();
      }
    },
  },
};
</script>