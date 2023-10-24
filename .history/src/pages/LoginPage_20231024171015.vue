<template>
  <div class="login d-flex justify-content-center">
    <div class="">
      <div class="login__form">
        <form
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="../assets/logo.png" alt="" />
          <h2 class="header-title">Đăng Nhập</h2>
          <div class="d-flex">
            <label for="exampleInputEmail1" class=""
              >Email của bạn</label
            >
            <input type="email" class="form__control-login " id="exampleInputEmail1" />
          </div>
          <div class="mt-8px ">
            <label for="exampleInputPassword1" class=""
              >Nhập mật khẩu của bạn</label
            >
            <input
              type="password"
              class=" form__control-login"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="submit__btn mt-10px mb-20px btn about-btn">Đăng Nhập</button>
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
    login () {
      // Kiểm tra thông tin đăng nhập ở đây (ví dụ: so sánh với thông tin lưu trữ trong Local Storage)
      // Nếu thông tin đúng, lưu trạng thái đăng nhập và chuyển hướng người dùng đến trang khác
      // Nếu thông tin không đúng, hiển thị thông báo lỗi
    }
  }
}
</script>
