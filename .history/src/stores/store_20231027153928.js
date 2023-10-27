import { AUTH_REQUEST, AUTH_LOGOUT } from "./auth";
import axiosConfig from "@/libs/axiosConfig";
import jwtDecode from "jwt-decode";

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
      console.log(payload);
      state.token = payload.token;
      state.role = payload.role;
    },
    [AUTH_LOGOUT]: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
    },
  },
  actions: {
    ////   login
    [AUTH_REQUEST]: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        axiosConfig
          .post("/user/login", payload.data)
          .then((response) => {
            localStorage.setItem("token", response.data.access_token);
            localStorage.setItem(
              "role",
              jwtDecode(response.data.access_token).role
            );

            commit(AUTH_REQUEST, {
              token: response.data.access_token,
              role: jwtDecode(response.data.access_token).role,
            });
            resolve(response);
          })
          .catch(function (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");

            reject(error);
          });
      });
    },
    //// logout
    [AUTH_LOGOUT]: ({ commit }) => {
      return new Promise((resolve) => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user_id");
        localStorage.removeItem("username");
        localStorage.removeItem("user_email");

        commit(AUTH_LOGOUT, { token: "", role: "" });
        resolve();
      });
    },
  },
});

export { store };
