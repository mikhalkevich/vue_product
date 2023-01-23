import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    users: [],
    catalogs: []
  },
  getters: {
    getUsers: (state) => state.users,
    getCatalogs: (state) => state.catalogs,
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchCatalogs({ commit }){
      try {
        const data = await axios.get(
            "public/catalogs?products=true"
        );
        commit("SET_CATALOGS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_CATALOGS(state, catalogs) {
      state.catalogs = catalogs;
    },
  },
});