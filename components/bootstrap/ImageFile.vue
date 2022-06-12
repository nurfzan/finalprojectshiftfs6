<template>
  <div class="row my-3">
    <div class="col-sm-2">
      <label :for="idName">{{ name }}</label>
    </div>
    <div class="col-sm-10">
      <input type="file" accept="image/jpeg, image/png" @change="change" :placeholder="placeholder" :disabled="disabled" :readonly="disabled" class="form-control" :required="!noRequired">
      <img v-if="val" :src="val" :alt="name" class="w-50 mt-2">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    noRequired: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    val: String,
  },
  computed: {
    placeholder() {
      return "Please input " + this.name;
    },
    idName() {
      return this.name.replace(/ /g, "");
    },
  },
  methods: {
    change(e) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      this.$emit("get", { url, file });
    },
  },
};
</script>