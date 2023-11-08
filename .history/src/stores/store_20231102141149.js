import { AUTH_REQUEST, AUTH_LOGOUT } from "./auth";
import axiosConfig from "@/libs/axiosConfig";
import jwtDecode from "jwt-decode";
import { createStore } from "vuex";

const store = createStore({
  state: {
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "",
    email: localStorage.getItem("email") || "",
    users: [],
  },
  getters: {
    isAuthenticated: (state) => state.token !== "",
    getRole: (state) => state.role,
    getEmail: (state) => state.email,
  },
  mutations: {
    [AUTH_REQUEST]: (state, payload) => {
      console.log("Payload-data",payload);
      state.token = payload.token;
      state.role = payload.role;
      state.email = payload.email;
    },
    [AUTH_LOGOUT]: (state, payload) => {
      state.token = payload.token;
      state.role = payload.role;
      state.email = payload.email;
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
            localStorage.setItem(
              "email",
              jwtDecode(response.data.access_token).email
            );

            commit(AUTH_REQUEST, {
              token: response.data.access_token,
              role: jwtDecode(response.data.access_token).role,
              email: jwtDecode(response.data.access_token).email,
            });
            resolve(response);
          })
          .catch(function (error) {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("email");

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
        localStorage.removeItem("email");

        commit(AUTH_LOGOUT, { token: "", role: "", email: "" });
        resolve();
      });
    },
  },
});

export { store };
