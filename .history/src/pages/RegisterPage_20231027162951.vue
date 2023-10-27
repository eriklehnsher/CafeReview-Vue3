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
import axiosIns from "../libs/axiosConfig.js";
import {AUTH_REQUEST} from "../stores/auth";

export default {
  data () {
    return {
      formRegister: {
        email: '',
        name: '',
        password: ''
      }
    }
  },
  // methods: {
  //   async submitRegister () {
  //     const data = {
  //       username: this.formRegister.username,
  //       email: this.formRegister.email,
  //       password: this.formRegister.password
  //     }
  //     localStorage.setItem('user_data', JSON.stringify(data))

  //     console.log('data-Register',data)
  //   }
  // }
   methods: {
    async submitRegister() {
      const data = {
        username: this.formRegister.name,
        email: this.formRegister.email,
        password: this.formRegister.password,
        role: "",

      };
      await axiosIns
        .post("/user/register", data)
        .then(() => {
          let dataLogin = {
            email: this.formRegister.email,
            password: this.formRegister.password,

          };
          this.$store
            .dispatch(AUTH_REQUEST, { data: dataLogin })
            .then((res) => {
              console.log(res);
              this.$emit("login", this.isLogin);
            })
            .catch((err) => {
              console.log(err);
            });
  
        })
        .catch((err) => {
          console.log("err:::::::", err);
        });
    },
  },
}
</script>
