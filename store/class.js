export const state = () => {
  return {
    title: "Daftar Kelas",
    classes: [],
    class: {
      
        name: "",
        file: "",
        description: "",
        dateFrom: "",
        dateTo: ""
    },
  };
};

export const actions = {
  SET_CLASSES({ commit }, classes) {
    commit("SET_CLASSES_MUTATION", classes);
  },
    SET_CLASS({ commit }, kelas) {
        commit("SET_CLASS_MUTATION", kelas);
    },
};

export const mutations = {
  SET_CLASSES_MUTATION(state, classes) {
    state.classes = classes;
  },
    SET_CLASS_MUTATION(state, kelas) {
        state.class = kelas;
    }
};
