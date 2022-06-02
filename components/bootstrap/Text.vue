<template>
  <div class="form-group row">
    <label for="input" class="col-sm-2 col-form-label">{{ name }}</label>
    <div class="col-sm-10">
      <input :type="type" v-model="value" class="form-control" id="input" required />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: { type: String, default: "text" },
    name: { type: String, default: "Nama inputan" },
    val: {
      type: String,
      default: "",
    },
  },
  computed: {
    value: {
      get() {
        return this.val;
      },
      set(newValue) {
        this.$emit("get", newValue);
      },
    },
  },
};
</script>