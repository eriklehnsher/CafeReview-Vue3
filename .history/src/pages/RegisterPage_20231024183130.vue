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
          <div class="input-field d-flex flex-column">
            <input
              type="username"
              class="input-box"
              id="exampleInputUsername1"
              v-model="username"
            />
            <label
              for="exampleInputUsername1"
              class="label__register label__register--username"
              >Tên Hiển Thị</label
            >
          </div>
          <div class=" mt-20px input-field d-flex flex-column">
            <input
              type="email"
              class="input-box"
              id="exampleInputEmail1"
              v-model="email"
            />
            <label
              for="exampleInputEmail1"
              class="label__register label__register--email"
              >Email</label
            >
          </div>
          <div
            class="input-field d-flex flex-column justify-content-start mt-20px"
          >
            <input
              v-model="password"
              type="password"
              class="input-box"
              id="exampleInputPassword1"
            />
            <label
              for="exampleInputPassword1"
              class="label__register label__register--password"
              >mật khẩu của bạn</label
            >
          </div>
          <span class="span-text"
            >Bạn đã có tài khoản?
            <router-link class="btn-register" to="/register"
              >Đăng nhập ngay</router-link
            ></span
          >

          <button
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
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('auth/register', {
        email: this.email,
        password: this.password
      })
      // Kiểm tra thông tin đăng nhập ở đây (ví dụ: so sánh với thông tin lưu trữ trong Local Storage)
      // Nếu thông tin đúng, lưu trạng thái đăng nhập và chuyển hướng người dùng đến trang khác
      // Nếu thông tin không đúng, hiển thị thông báo lỗi
    }
  }
}
</script>
