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
export default {
  data () {
    return {
      formLogin: {
          email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const userData = localStorage.getItem('user_data')
      // Kiểm tra thông tin đăng nhập ở đây (ví dụ: so sánh với thông tin lưu trữ trong Local Storage)
      // Nếu thông tin đúng, lưu trạng thái đăng nhập và chuyển hướng người dùng đến trang khác

      if (userData) {
        // Chuyển chuỗi JSON thành đối tượng JavaScript
        const userDataObj = JSON.parse(userData)

        // Sử dụng dữ liệu người dùng
        console.log('Dữ liệu người dùng từ localStorage:', userDataObj)
      } // Nếu thông tin không đúng, hiển thị thông báo lỗi
    }
  }
}
</script>
