<template>
  <div>
    <h2>{{ $store.state.class.title }}</h2>
    <BootstrapFloatingButton @click.native="redirectAdd" />
    <div class="row">
      <div v-for="(kelas, i) in listClass" :key="i" class="col-md-4">
        <!-- <NuxtLink :to="'/class' + kelas.id"> -->
        <BootstrapCard>
          <template v-slot:header>
            <img
              :src="kelas.img"
              alt=""
              style="height: 200px"
              @click="setDetailClass(kelas)"
            />
          </template>
          <template v-slot:default>
            <div class="d-flex justify-content-between">
              <span @click="setDetailClass(kelas)">{{ kelas.name }}</span>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteClass(kelas)"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
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
  components: { Button },
  mixins: [Request],
  data() {
    return {
      listClass: this.$store.state.class.classes,
    };
  },
  created() {
    this.getlistClass();
  },
  methods: {
    redirectAdd() {
      this.$store.dispatch("class/SET_CLASS", {
        name: "",
        description: "",
        startDate: "",
        endDate: "",
      });
      this.$router.push("/class/addclass");
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