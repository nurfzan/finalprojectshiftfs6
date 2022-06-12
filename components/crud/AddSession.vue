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
        <BootstrapImageFile
          name="Image for Class"
          :val="file"
          @get="(newValue) => this.changeStateImage( newValue )"
        />
        <BootstrapText
          name="Date From"
          type="date"
          :val="form.dateFrom"
          @get="(newValue) => this.changeState({ dateFrom: newValue })"
        />
        <BootstrapText
          name="Date To"
          type="date"
          :val="form.dateTo"
          @get="(newValue) => this.changeState({ dateTo: newValue })"
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
  data() {
    return {
      file: null,
    }
  },
  computed: {
    form() {
      return this.$store.state.class.class;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.getDetail();
    }
  },
  methods: {
    changeState(value) {
      const kelas = { ...this.form, ...value };
      this.$store.dispatch("class/SET_CLASS", kelas);
    },
    changeStateImage(value){
      this.file = value.url
      const kelas = { ...this.form, file: value.file };
      this.$store.dispatch("class/SET_CLASS", kelas);
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
    async tambahKelas() {
      const payload = this.form;
      const response = await this.requestFormData("/class", payload);
      if (response) this.$router.push("/class");
    },

    async updateKelas() {
      const payload = this.form;
      try {
        const response = await this.$axios.put(`/class`, payload);
        alert("Data berhasil diupdate");
        this.$router.push("/class");
      } catch (error) {
        console.log(error);
      }
    },
    async submitData() {
      if (this.$route.params.id) {
        await this.updateKelas();
      } else {
        await this.tambahKelas();
      }
    },
  },
};
</script>