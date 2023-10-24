<template>
  <div class="login d-flex justify-content-center">
    <div class="">
      <div class="login__form">
        <form class="d-flex justify-content-center">
          <img src="../assets/logo.png" alt="">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
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
