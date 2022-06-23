export const state = () => {
    return {
      sessions: [],
        session: {
        name: "",
        description: "",
        start: "",
        end: "",    
      },
    };
  };

  export const actions = {
    SET_SESSIONS({ commit }, sessions) {
      commit("SET_SESSIONS_MUTATION", sessions);
    },
      SET_SESSION({ commit }, sesi) {
          commit("SET_SESSION_MUTATION", sesi);
      },
  };
  
  export const mutations = {
    SET_SESSIONS_MUTATION(state, sessions) {
      state.sessions = sessions;
    },
      SET_SESSION_MUTATION(state, sesi) {
          state.session = sesi;
      }
  };