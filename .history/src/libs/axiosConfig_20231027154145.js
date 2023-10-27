import axios from "axios";
import { store } from "../stores/store";
import { AUTH_LOGOUT } from "@/stores/auth";

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  timeout: 50000,
});

axiosIns.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axiosIns.defaults.headers.post["Content-Type"] = "application/json";

axiosIns.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    if (token != "") {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.params = { base_url: process.env.VUE_APP_BACKEND_URL };
    return config;
  },
  (error) => {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

axiosIns.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 500;
    switch (status) {
      case 401: {
        const token = store.state.token;
        if (token != "") {
          store.dispatch(AUTH_LOGOUT);
        }
        window.location.href = window.location.origin + "/#/login";
        return Promise.reject(error);
      }
      case 404: {
        window.location.href = window.location.origin + "/#/NotFound";
        return Promise.reject(error);
      }
      case 503: {
        alert("service unavailable, try again later");
        return Promise.reject(error);
      }
      case 408:
        {
          alert("link expired");
          window.location.href = window.location.origin + "/#/login";
        }
        break;
      default:
        return Promise.reject(error);
    }
  }
);

export default axiosIns;
