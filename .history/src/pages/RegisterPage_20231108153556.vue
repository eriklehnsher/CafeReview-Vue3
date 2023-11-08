<template>
  <div class="register d-flex justify-content-center">
    <div class="">
      <div class="register__form">
        <form
          @submit.prevent="register"
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="../assets/logo.png" alt="" />
          <h2 class="header-title">Đăng Ký</h2>
          <div
            class="input-field d-flex flex-column justify-content-start mt-20px"
          >
            <input
              v-model="formRegister.username"
              type="text"
              class="input-box"
              id="InputUsername"
              required
            />
            <label
              for="InputUsername"
              class="label__login label__login--password"
              >Tên Hiển Thị</label
            >
          </div>
          <div
            class="input-field d-flex flex-column justify-content-start mt-20px"
          >
            <input
              v-model="formRegister.email"
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
              v-model="formRegister.password"
              type="password"
              class="input-box"
              id="Inputpassword"
              required
            />
            <label
              for="Inputpassword"
              class="label__login label__login--password"
              >Mật khẩu của bạn</label
            >
          </div>
          <span class="span-text"
            >Bạn đã có tài khoản?
            <router-link class="btn-register" to="/login"
              >Đăng nhập ngay</router-link
            ></span
          >

          <button
            @click="submitRegister()"
            type="submit"
            class="submit__btn mt-10px mb-20px btn about-btn"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axiosConfig from "@/libs/axiosConfig";
import { ref } from "vue";
import { AUTH_REQUEST } from "../stores/auth";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const formRegister = ref({
      email: "",
      name: "",
      password: "",
    });

    const submitRegister = async () => {
      const data = {
        username: formRegister.value.name,
        email: formRegister.value.email,
        password: formRegister.value.password,
      };
      localStorage.setItem("user_data", JSON.stringify(data));
      try {
        const response = await axiosConfig.post(
          "/user/register",
          formRegister.value
        );

        const datalogin = {
          email: formRegister.value.email,
          password: formRegister.value.password,
        };
        await store.dispatch(AUTH_REQUEST, { data: datalogin });
        localStorage.setItem("user_data", JSON.stringify(response.data));
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        window.location.replace("/");
      } catch (err) {
        console.log("err:::::::", err);
      }
    };
    return {
      formRegister,
      submitRegister,
    };
  },
};
</script>
