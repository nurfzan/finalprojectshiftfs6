<template>
  <div>
    <div class="section-header">
      <div class="w-100 d-flex justify-content-center">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Session</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Assignment</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Members</a>
  </li>
</ul>
    </div>
    </div>
    <div class="row">
  <div class="col-4">
    <span @click.native="redirectAddSession" class="justify-content-center">+ Add Session</span>
    <br>
    <div class="list-group" id="list-tab" role="tablist">
      <a v-for="(sesi, i) in listSession" :key="i" class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"></a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import Button from "~/components/bootstrap/Button.vue";
export default {
  components: { Button },
  computed: {
    listSession() {
      return this.$store.state.session.sessions;
    },
  },
  created() {
    this.getlistSession();
  },
  methods: {
    redirectAddSession() {
      this.$router.push("/session/addsession");
      this.$$store.dispatch("session/SET_SESSION", {
        name: null,
        description: null,
        start: null,
        end: null,
      });
    },
    async getlistSession() {
      const response = await this.requestGet("/session");
      if (response) this.$store.dispatch("session/SET_SESSIONS", response.data.data);
    },
    setDetailSession(sesi) {
      this.$store.dispatch("session/SET_SESSION", sesi);
      this.$router.push("/session/" + sesi.id);
  },
},
};
</script>