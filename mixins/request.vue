<script>
export default {
  methods: {
    async requestGet(url) {
      try {
        const response = await this.$axios.get(url);
        return response.data;
      } catch (error) {
        this.$swal({
          title: "Error",
          //   text: error.response.data.msg,
          text: error.toString(),
          icon: "error",
        });
        return null;
      }
    },
    async requestPost(url, payload) {
      try {
        const response = await this.$axios.post(url, payload);
        this.$swal({
          title: "Success",
          text: response.data.msg,
          icon: "success",
        });
        return response.data;
      } catch (error) {
        this.$swal({
          title: "Error",
          //   text: error.response.data.msg,
          text: error.toString(),
          icon: "error",
        });
        return null;
      }
    },
  },
};
</script>