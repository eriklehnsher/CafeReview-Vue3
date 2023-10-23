<template>
  <div class="top-stores">
    <H1 class="header-title"
      >Những quán ăn và cafe đang hot tại thành phố bạn</H1
    >
    <div class="list--stores">
      <!-- store-item -->
      <div class="list--stores__store">
        <img src="../assets/images/cafeStore1.jpg" alt="" />
        <h2 class="list--stores__store--name">Joie</h2>
        <div class="list--stores__store--location d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          <p>116C3, Hoàng Ngọc Phách, Đống Đa, Hà Nội.</p>
        </div>
        <div
          class="Line5"
          style="
            width: auto;
            height: 0px;
            border: 1px #beb6b6 solid;
            margin: 20px 0px;
          "
        ></div>
        <div class="list--stores__store--price d-flex justify-content-between">
          <p>Giá: 40.000đ - 65.000đ</p>
          <div class="d-flex justify-content-end">
            <svg
              width="15"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Star">
                <path
                  id="Star 1"
                  d="M6.10745 15.6944C6.58105 14.3054 6.81785 13.6108 7.22506 13.6108C7.63226 13.6108 7.86906 14.3054 8.34266 15.6944L8.36472 15.7591C8.63228 16.5438 8.76606 16.9362 9.03871 17.1747C9.31137 17.4132 9.66928 17.4509 10.3851 17.5263L10.5145 17.5399C11.6861 17.6634 12.2718 17.7251 12.3972 18.1635C12.5225 18.602 12.0875 19.0676 11.2175 19.9988L10.9271 20.3096C10.4867 20.781 10.2664 21.0167 10.1638 21.3257C10.1447 21.3833 10.1287 21.4423 10.1162 21.5024C10.0487 21.8245 10.1132 22.1664 10.2421 22.8503L10.2823 23.0631C10.5193 24.32 10.6378 24.9484 10.4309 25.2194C10.3536 25.3207 10.2531 25.3936 10.1414 25.4295C9.84269 25.5254 9.41854 25.1188 8.57023 24.3055C8.0132 23.7715 7.73469 23.5045 7.41492 23.4445C7.28914 23.4208 7.16097 23.4208 7.03519 23.4445C6.71543 23.5045 6.43691 23.7715 5.87988 24.3055C5.03157 25.1188 4.60742 25.5254 4.30866 25.4295C4.19703 25.3936 4.09653 25.3207 4.01921 25.2194C3.81229 24.9484 3.9308 24.32 4.16783 23.0631L4.20797 22.8503C4.33694 22.1664 4.40143 21.8245 4.33396 21.5024C4.32138 21.4423 4.30546 21.3833 4.28631 21.3257C4.18367 21.0167 3.96346 20.781 3.52303 20.3096L3.23266 19.9988C2.36262 19.0676 1.9276 18.602 2.05294 18.1635C2.17828 17.7251 2.76406 17.6634 3.9356 17.5399L4.06501 17.5263C4.78083 17.4509 5.13875 17.4132 5.4114 17.1747C5.68405 16.9362 5.81784 16.5438 6.0854 15.7591L6.10745 15.6944Z"
                  fill="#C7E030"
                  stroke="#C7E030"
                  stroke-width="2"
                />
              </g>
            </svg>

            <p class="vote">7/10</p>
          </div>
        </div>
      </div>
      <!-- store item -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.header-title {
  font-size: 30px;
  color: #0c3f6f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  font-family: inherit;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.list--stores {
  width: 300px;
  height: 400px;
}
.list--stores__store {
  
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 10px;
  align-items: center;
}
.list--stores__store img {
  margin: 7px 0px 0px 5px;
  width: auto;
  height: 257px;
  flex-shrink: 0;
  border-radius: 8px;
}

.list--stores p {
  color: #000;
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.fa-star {
  background-color: yellow !important;
}
.list--stores__store--location p {
  margin-bottom: 0;
  margin-left: 5px;
}

.list--stores__store--price p {
  margin-top: 13px;
  margin-bottom: 0;
}
.list--stores__store--price .vote {
  margin-top: 13px;
}
</style>
