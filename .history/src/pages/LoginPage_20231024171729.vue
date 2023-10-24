<template>
  <div class="login d-flex justify-content-center">
    <div class="">
      <div class="login__form">
        <form
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img src="../assets/logo.png" alt="" />
          <h2 class="header-title">Đăng Nhập</h2>
          <div
            class="FormField"
            style="width: 245px; height: 51px; position: relative"
          >
            <div
              class="Left"
              style="
                width: 17px;
                height: 50px;
                left: 0px;
                top: 0px;
                position: absolute;
                border-radius: 8px;
                border: 2px #8a826c solid;
              "
            ></div>
            <div
              class="Right"
              style="
                width: 17px;
                height: 50px;
                left: 245px;
                top: 50px;
                position: absolute;
                transform: rotate(-180deg);
                transform-origin: 0 0;
                border-radius: 8px;
                border: 2px #8a826c solid;
              "
            ></div>
            <div
              class="BigLabel"
              style="
                left: 17px;
                top: 15px;
                position: absolute;
                color: rgba(0, 0, 0, 0.33);
                font-size: 16px;
                font-family: Kodchasan;
                font-weight: 500;
                word-wrap: break-word;
              "
            >
              Tên đăng nhập
            </div>
            <div
              class="TopPart"
              style="
                width: 218px;
                height: 16px;
                left: 10px;
                top: -8px;
                position: absolute;
                justify-content: flex-start;
                align-items: center;
                display: inline-flex;
              "
            >
              <div
                class="SmallAutoLayout"
                style="
                  height: 14px;
                  padding-left: 6px;
                  padding-right: 6px;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  display: flex;
                "
              >
                <div
                  class="SmallLabel"
                  style="
                    opacity: 0;
                    color: black;
                    font-size: 11px;
                    font-family: Kodchasan;
                    font-weight: 500;
                    word-wrap: break-word;
                  "
                >
                  Tên đăng nhập
                </div>
              </div>
              <div
                class="TopLine"
                style="flex: 1 1 0; height: 0px; border: 2px #8a826c solid"
              ></div>
            </div>
            <div
              class="BottomLine"
              style="
                width: 211px;
                height: 0px;
                left: 17px;
                top: 51px;
                position: absolute;
                border: 2px #8a826c solid;
              "
            ></div>
          </div>
          <div class="d-flex flex-column">
            <label for="exampleInputEmail1" class="">Email của bạn</label>
            <input
              type="email"
              class="form__control-login"
              id="exampleInputEmail1"
            />
          </div>
          <div class="mt-20px">
            <label for="exampleInputPassword1" class=""
              >Nhập mật khẩu của bạn</label
            >
            <input
              type="password"
              class="d-flex flex-column form__control-login"
              id="exampleInputPassword1"
            />
          </div>

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
