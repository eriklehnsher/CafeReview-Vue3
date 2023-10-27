import Vue from "vue";
import Vuex from "vuex";
import { AUTH_REQUEST, AUTH_LOGOUT } from "./auth";
import axiosConfig from "@/libs/axiosConfig";
import jwtDecode from "jwt-decode";
Vue.use(Vuex);

import { createStore } from "vuex";

const store = createStore({
  state: {
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "",
    users: [],
  },
  getters: {
    isAuthenticated: (state) => state.token !== "",
    getRole: (state) => state.role,
  },
  mutations: {
    [AUTH_REQUEST]: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
    },
    [AUTH_LOGOUT]: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
    },
  },
  actions: {},
});

export default store;
