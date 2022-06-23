<template>
  <div>
    <div class="section-header">
      <h2>{{ $store.state.class.title }}</h2>
    </div>
    <BootstrapFloatingButton @click.native="redirectAddClass" />
    <div class="row">
      <div v-for="(kelas, i) in listClass" :key="i" class="col-md-4">
        <!-- <NuxtLink :to="'/class' + kelas.id"> -->
        <BootstrapCard>
          <template v-slot:header>
            <img
              :src="kelas.file"
              alt=""
              style="height: 200px"
              @click="setDetailClass(kelas)"
            />
          </template>
          <template v-slot:default>
            <div class="d-flex justify-content-between">
              <span @click="setDetailClass(kelas)">{{ kelas.name }}</span>
              <hr>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteClass(kelas)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </template>
          <template v-slot:footer>
            <button
                type="button"
                class="btn btn-primary"
                @click="directSessionMaterial(kelas)"
              >
                <i class="fas fa-sign-in-alt"></i>
              </button>
          </template>
        </BootstrapCard>
        <!-- </NuxtLink> -->
      </div>
    </div>
  </div>
</template>
<script>
import Button from "~/components/bootstrap/Button.vue";
import Request from "~/mixins/request.vue";
export default {
  // middleware: "auth",
  components: { Button },
  mixins: [Request],
  computed: {
    listClass() {
      return this.$store.state.class.classes;
    },
  },
  created() {
    this.getlistClass();
  },
  methods: {
    redirectAddClass() {
      this.$router.push("/class/addclass");
      this.$store.dispatch("class/SET_CLASS", {
        name: null,
        description: null,
        file: null,
        dateFrom: null,
        dateTo: null,
      });
    },
    directSessionMaterial(kelas) {
      this.$router.push(`/class/${kelas.id}/session/`);
    },
    // async getlistClass() {
    //   try {
    //     const response = await this.$axios.get("/class");
    //     // this.listClass = response.data.data;
    //     this.$store.dispatch("class/SET_CLASSES", response.data.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async getlistClass() {
        const response = await this.requestGet("/class");
        if (response) this.$store.dispatch("class/SET_CLASSES", response.data);
    },
    async deleteClass(kelas) {
      try {
        const confirm = await this.$swal({
          icon: "question",
          title: "Are you sure to delete this class?",
          showCancelButton: true,
        });
        if (confirm.isConfirmed) {
          const response = await this.$axios.delete(`/class/${kelas.id}`);
          this.$swal({
            title: "Deleted",
            text: `${kelas.name} class successfully deleted`,
            icon: "success",
          });
          this.getlistClass();
        }
      } catch (error) {
        console.log(error);
      }
    },
    setDetailClass(kelas) {
      this.$store.dispatch("class/SET_CLASS", kelas);
      this.$router.push("/class/" + kelas.id);
    },
  },
};
</script>