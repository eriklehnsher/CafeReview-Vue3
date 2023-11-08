<template>
  <div class="login d-flex justify-content-center">
    <div class="">
      <div class="login__form">
        <form
          @submit.prevent="login"
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="../assets/logo.png" alt="" />
          <h2 class="header-title">Đăng Nhập</h2>

          <div
            class="input-field d-flex flex-column justify-content-start mt-20px"
          >
            <input
              v-model="formLogin.email"
              type="text"
              class="input-box"
              id="InputEmail"
              required
            />
            <label for="InputEmail" class="label__login label__login--password"
              >Email của bạn</label
            >
          </div>
          <div
            class="input-field d-flex flex-column justify-content-start mt-20px"
          >
            <input
              v-model="formLogin.password"
              type="password"
              class="input-box"
              id="exampleInputPassword1"
              required
            />
            <label
              for="exampleInputPassword1"
              class="label__login label__login--password"
              >mật khẩu của bạn</label
            >
          </div>
          <span class="span-text"
            >Bạn chưa có tài khoản?
            <router-link class="btn-register" to="/register"
              >Đăng Ký ngay</router-link
            ></span
          >

          <button
            @click="submitLogin()"
            type="submit"
            class="submit__btn mt-10px mb-20px btn about-btn"
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import axiosIns from "@/libs/axiosConfig";
import { AUTH_REQUEST } from "../stores/auth";

export default {
  setup() {
    const store = useStore();

    const formLogin = ref({
      email: "",
      password: "",
    });
    const submitLogin = async () => {
      const data = {
        email: formLogin.value.email,
        password: formLogin.value.password,
      };
      try {
        await store.dispatch(AUTH_REQUEST, { data });
        const response = await axiosIns.get(
          `/user/email/${formLogin.value.email}`
        );
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        window.location.replace("/");
      } catch (error) {
        console.log("Error", error);
      }
    };
    return {
      formLogin,
      submitLogin,
    };
  },
};
</script>
