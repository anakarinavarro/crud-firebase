import Firebase from "firebase";

export const usersModule = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAll({ commit }) {
      commit("SET_LOADING", true);

      try {
        const UserCollection = await Firebase.firestore().collection("users").get();
        const users = [];

        UserCollection.forEach((document) => {
          users.push({ ...document.data(), id: document.id });
        });
        commit("SET_LIST", users);
      } catch (e) {
        console.error("no trae los datos", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
