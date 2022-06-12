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
    async requestFormData (url, payload) {
      const dataPayload = new FormData();
        for (const key in payload) {
          // if (Array.isArray(payload[key])) {
          //   for (let idx = 0; idx < payload[key].length; idx++) {
          //     const element = payload[key][idx];
          //     dataPayload.append(`${key}[${idx}]`, element);
          //   }
          // } else dataPayload.append(key, payload[key]);
          dataPayload.append(key, payload[key]);
        }
      try {
        const response = await this.$axios.post(url, dataPayload);
        this.$swal({
          title: "Success",
          text: response.data.msg,
          icon: "success",
        });
        return response.data;
        
      } catch (error) {
        this.$swal({
          title: "Error",
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