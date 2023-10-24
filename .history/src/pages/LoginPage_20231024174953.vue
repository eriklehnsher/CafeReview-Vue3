<template>
  <div class="login d-flex justify-content-center">
    <div class="">
      <div class="login__form">
        <form
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="../assets/logo.png" alt="" />
          <h2 class="header-title">Đăng Nhập</h2>
          
          <div class=" input-field d-flex flex-column">
           
            <input type="email" class="input-box " id="exampleInputEmail1" />
             <label for="exampleInputEmail1" class="label__login"
              >Email</label
            >
          </div>
          <div class="input-field d-flex flex-column justify-content-start mt-20px ">
            
            <input
              type="password"
              class="d-flex flex-column input-box"
              id="exampleInputPassword1"
            />
            <label for="exampleInputPassword1" class="label__login"
              >mật khẩu của bạn</label
            >
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
