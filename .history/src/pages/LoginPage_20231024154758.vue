<template>
  <div>
    <form @submit="login">
      <div>
        <label for="username">Tên người dùng:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
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
      this.$store.dispatch('updateAccount', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
